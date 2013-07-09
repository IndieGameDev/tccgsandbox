<?php
    include "TCCGMySQL.class.php";
    include "localhostdb.php";

    $mysql = new TCCGMySQL($connection_information);
    $result = $mysql->query('SELECT COUNT(*) as count FROM cards');
    $count = $result[0][0]["count"];
    $rowNumber = rand(0, $count-1);

    $result = $mysql->query("select * from cards limit ".$rowNumber.",1");

    header('Content-Type: application/json');
    echo json_encode($result[0]["cards"]);
?>