<?php
//Mapeo los campos del form
$name = $_POST["name"];
$email = $_POST["email"];
$msg = $_POST["msg"];

require "./phpmailer/PHPMailer.php";
require "./phpmailer/SMTP.php";
require "./phpmailer/Exception.php";
require "./phpmailer/OAuth.php";

$mail = new PHPMailer\PHPMailer\PHPMailer();
$mail->isSMTP();
$mail->SMTPDebug = 2;
$mail->SMTPAuth = true;
$mail->SMTPSecure = "ssl";
$mail->Host = "smtp.gmail.com"; // GMail
$mail->Port = 465;
$mail->Username = "send.email.pruebas@gmail.com"; //email address
$mail->Password = "Pruebas.1234"; //email password
$mail->setFrom("send.email.pruebas@gmail.com", "Mail del Form");
$mail->addAddress("send.email.pruebas@gmail.com");


$mail->Subject = "Consulta desde Formulario Contacto";

$mail->Body = "<p>Este mail es enviado desde la pagina</p><br><ul><li>Email: ".$email."</li><li>Name: ".$name."</li><li>Message: ".$msg."</li></ul>";
$mail->isHTML(true);

if($mail->send()) {
    echo "<script>location.href='../index.html'</script>";
}
else {
    echo "2 Error al enviar mail: err->".$mail->ErrorInfo;
}

