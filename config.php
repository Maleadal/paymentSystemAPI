<?php
session_start();
/* Database credentials. Assuming you are running MySQL
server with default setting (user 'root' with no password) */
define('DB_SERVER', 'localhost');
define('DB_USERNAME', 'root');
define('DB_PASSWORD', '');
define('DB_NAME', 'ccs_masterlist');
 
/* Attempt to connect to MySQL database */
$link = mysqli_connect(DB_SERVER, DB_USERNAME, DB_PASSWORD, DB_NAME);
 
// Check connection
if($link === false){
    die("ERROR: Could not connect. " . mysqli_connect_error());
}

function sqlSelect($columnName, $table, $condition = "1"){
    /* Attempt to connect to MySQL database */
    $link = mysqli_connect(DB_SERVER, DB_USERNAME, DB_PASSWORD, DB_NAME);
    $query = mysqli_query($link, "SELECT ".$columnName." FROM ".$table." WHERE ".$condition."") 
    or die("SELECT ".$columnName." FROM ".$table." WHERE ".$condition."\n"+mysqli_error($link));
    $row = mysqli_fetch_assoc($query);
    return $row;
}
function sqlSelectReturnQuery($columnName, $table, $condition = "1"){
    $link = mysqli_connect(DB_SERVER, DB_USERNAME, DB_PASSWORD, DB_NAME);
    //echo "SELECT ".$columnName." FROM ".$table." WHERE ".$condition."!";
    $query = mysqli_query($link, "SELECT ".$columnName." FROM ".$table." WHERE ".$condition."") or die("SELECT ".$columnName." FROM ".$table." WHERE ".$condition."".mysqli_error());
    return $query;
}
function sqlSelectReturnQuery1($columnName, $table, $condition = "1"){
    $link = mysqli_connect(DB_SERVER, DB_USERNAME, DB_PASSWORD, DB_NAME);
    //echo "SELECT ".$columnName." FROM ".$table." WHERE ".$condition."";
    $query = mysqli_query($link, "SELECT ".$columnName." FROM ".$table." WHERE ".$condition."") or die(mysql_error());
    
    return $query;
}
function sqlSelectReturnQuery2($columnName, $table, $condition = "1"){
    $link = mysqli_connect(DB_SERVER, DB_USERNAME, DB_PASSWORD, DB_NAME);
    //echo "SELECT ".$columnName." FROM ".$table." WHERE ".$condition." order By number";
    $query = mysqli_query($link, "SELECT ".$columnName." FROM ".$table." WHERE ".$condition." order By number") or die(mysqli_error());
    
    return $query;
}
function sqlInsertInto($tableColumnName, $value){
    $link = mysqli_connect(DB_SERVER, DB_USERNAME, DB_PASSWORD, DB_NAME);
    //die("INSERT INTO ".$tableColumnName." VALUES (".$value.")");
    $query = mysqli_query($link, "INSERT INTO ".$tableColumnName." VALUES (".$value.")") or die("INSERT INTO ".$tableColumnName." VALUES (".$value.")" +"|"+mysqli_error());
}
function sqlUpdate($table, $set, $condition = "1"){
    $link = mysqli_connect(DB_SERVER, DB_USERNAME, DB_PASSWORD, DB_NAME);
    $query = mysqli_query($link, "UPDATE ".$table." SET ".$set." WHERE ".$condition."") or die(mysqli_error());
}
function sqlDelete($table, $condition = "1"){
    $link = mysqli_connect(DB_SERVER, DB_USERNAME, DB_PASSWORD, DB_NAME);
    $query = mysqli_query($link, "DELETE FROM ".$table." WHERE ".$condition."") or die(mysqli_error());
}
    
?>