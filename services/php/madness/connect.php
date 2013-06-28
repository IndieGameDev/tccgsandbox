<?php
include "TCCGMySQL.class.php";
include "localhostdb.php";

function findOpenGame($mysql, $name){

	if(isInGame($mysql,$name)) return;

	$result = $mysql->query("SELECT * FROM `game` WHERE p2 != '".$name."' AND p1 != '".$name."' AND (p1 = '' OR p2 = '')");
	if(count($result) == 0){
		$check = $mysql->query("SELECT * FROM `game` WHERE (p1 = '' AND p2 ='".$name."') OR (p2 = '' AND p1 ='".$name."')");
		if(count($check) == 0){
			createGame($mysql, $name);
		} else {
			//echo "game exists ".$check[0]["game"]["id"];
		}
	} else {
		if($result[0]["game"]["p1"] == ""){
			$result = $mysql->update("game", array("p1" => $name, "turnOwner" => "p".rand(1,2)), "id = ".$result[0]["game"]["id"]);
		} else {
			$result = $mysql->update("game", array("p2" => $name, "turnOwner" => "p".rand(1,2)), "id = ".$result[0]["game"]["id"]);
		}
	}
}

function isInGame($mysql, $name){
	$result = $mysql->query("SELECT * FROM `game` WHERE p1 != '' AND p2 != '' AND (p1 = '".$name."' OR p2 = '".$name."')");
	return count($result) !== 0;
}

function createGame($mysql, $name){
	//new instance - make it!
	$result = $mysql->insert("game", array("p1" => $name, "p2" => ""));
}

$mysql = new TCCGMySQL($connection_information);
$name = isset($_GET["pname"])?$_GET["pname"] : "Player";



while(!isInGame($mysql, $name)){
	sleep(1);
	findOpenGame($mysql, $name);
}

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header("Access-Control-Allow-Headers: X-REQUESTED-WITH");

$result = $mysql->query("SELECT * FROM `game` WHERE p1 = '".$name."' OR p2 = '".$name."'");

$result[0]["name"] = $name;
$result[0]["myPlayer"] = ($name == $result[0]["game"]["p1"])? "p1" : "p2";

echo json_encode($result[0]);
?>