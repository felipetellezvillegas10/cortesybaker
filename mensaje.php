<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>mensajes</title>
	<link rel="stylesheet" type="text/css" href="adm/acciones.css">
	<meta http-equiv="Expires" content="0">
    <meta http-equiv="Last-Modified" content="0">
    <meta http-equiv="Cache-Control" content="no-cache, mustrevalidate">
    <meta http-equiv="Pragma" content="no-cache">
</head>
<body>

<?php
if(isset($_POST['enviar'])){

    $nombre = $_POST['nombre'];
    $email = $_POST['email'];
    $telefono = $_POST['telefono'];
    $mensaje = $_POST['mensaje'];

    $destino = "office@cbtax.net";
    $asunto = "Nuevo mensaje desde la web";

    $contenido = "Nombre: " . $nombre . "\n";
    $contenido .= "Email: " . $email . "\n";
    $contenido .= "Teléfono: " . $telefono . "\n";
    $contenido .= "Mensaje:\n" . $mensaje;

    $headers = "From: " . $email;

    if(mail($destino, $asunto, $contenido, $headers)){
        echo "Mensaje enviado correctamente";
    } else {
        echo "Error al enviar el mensaje";
    }
}
?>

<body>
</html>