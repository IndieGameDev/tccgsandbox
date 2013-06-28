<?php
include "TCCGMySQL.class.php";
include "localhostdb.php";

$mysql = new TCCGMySQL($connection_information);
$player = isset($_GET["pnum"])?$_GET["pnum"] : "p1";
$gid = isset($_GET["gid"])?$_GET["gid"] : "";

while(!isItMyTurnYet($mysql, $player, $gid)){
	sleep(1);
}

echo("[".date("h:m:s")."] It is your turn ".$player."!");

function isItMyTurnYet($mysql, $player, $gid){
	$result = $mysql->query("SELECT * FROM `game` WHERE id='".$gid."'");
	return ($result[0]["game"]["turnOwner"] == $player);
}
?>