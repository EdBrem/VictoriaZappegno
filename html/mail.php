<?php
error_reporting(0);
$nombre = $_POST['name'];
$correo = $_POST['email'];
$mensaje = $_POST['msg'];
$target = "eduardo.bremen92@gmail.com";


// coockies

setcookie("gnombre", $nombre, time() + 60*60*24*30);
setcookie("gcorreo", $nombre, time() + 60*60*24*30);

// Formato del mensaje

$msg = "Nombre: ".$nombre. "\n". "Correo: ".$correo. "\n". "Mensaje: ".$mensaje;
mail($target, "Nuevo mensaje en la página.", $msg);
header("location: contact.php");