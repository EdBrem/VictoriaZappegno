<?php
//Mapeo los campos del form
$name = $_POST["name"];
$msg = $_POST["review"];
$cal = $_POST["estrellas"];

require "./phpmailer/PHPMailer.php";
require "./phpmailer/SMTP.php";
require "./phpmailer/Exception.php";
require "./phpmailer/OAuth.php";

$mail = new PHPMailer\PHPMailer\PHPMailer();
$mail->isSMTP();
$mail->SMTPDebug = 0;
$mail->SMTPAuth = true;
$mail->SMTPSecure = "ssl";
$mail->Host = "smtp.gmail.com"; // GMail
$mail->Port = 465;
$mail->Username = "send.email.pruebas@gmail.com"; //email address
$mail->Password = "Pruebas.1234"; //email password
$mail->setFrom("send.email.pruebas@gmail.com", "Mail del Form");
$mail->addAddress("send.email.pruebas@gmail.com");


$mail->Subject = "Calificacion desde Formulario";

$mail->Body = "<p>Este mail es enviado desde la pagina</p><br><ul><li>Name: ".$name."</li><li>Message: ".$msg."</li><li>Calificacion: ".$cal."</li></ul>";
$mail->isHTML(true);

if($mail->send()) {
    echo "<script>location.href='../index.html'</script>";
}
else {
    echo "2 Error al enviar mail: err->".$mail->ErrorInfo;
}

