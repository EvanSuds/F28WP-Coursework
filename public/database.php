<?php
if (extension_loaded('sqlite3'))
{
    echo("**extension sqlite3 available**");
}
else
{
    echo 'sqlite3 not loaded';
}

$maindb = new SQLite3('databases/main.db');;

$maindb->exec("CREATE TABLE IF NOT EXISTS users(userid INTEGER PRIMARY KEY, username TEXT, password TEXT)");


?>
