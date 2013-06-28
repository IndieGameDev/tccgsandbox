<?php
include "TCCGMySQL.class.php";
include "localhostdb.php";

$mysql = new TCCGMySQL($connection_information);
$name = isset($_GET["pname"])?$_GET["pname"] : "Player";
$player = isset($_GET["pnum"])?$_GET["pnum"] : "p1";
$otherPlayer = ($player == "p1") ? "p2" : "p1";
$gid = isset($_GET["gid"])?$_GET["gid"] : "";

$result = $mysql->query("SELECT * FROM `game` WHERE id='".$gid."'");

if($result[0]["game"]["turnOwner"] == $player){
	//can change
	$mysql->update("game", array("turnOwner" => $otherPlayer), "id='".$gid."'");
}

?>