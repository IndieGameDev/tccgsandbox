<?php
    include "TCCGMySQL.class.php";
    include "localhostdb.php";

    $configDeckSize = 40;

    $mysql = new TCCGMySQL($connection_information);
    $result = $mysql->query('SELECT COUNT(*) as count FROM cards');
    $count = $result[0][0]["count"];

    $deck = array();
    for($i=0;$i<$configDeckSize;$i++){
        $rowNumber = rand(0, $count-1);
        $result = $mysql->query("select * from cards limit ".$rowNumber.",1");
        $deck[] = $result[0]["cards"];
    }
    header('Content-Type: application/json');
    echo json_encode($deck);
?>