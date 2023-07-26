<?php
$user = "root";
$pass = "";
$host = "localhost";
$dbname = "tabla_registros";
$conn = new mysqli($host, $user, $pass, $dbname);
// Verificar la conexión
if ($conn->connect_error) {
    die("Error en la conexión: " . $conn->connect_error);
}
$usuario = $_POST["usuario"];
$contrasena = $_POST["contrasena"];
$sql = "SELECT * FROM usuarios WHERE username=? AND password=?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ss", $username, $password);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    // Usuario autenticado correctamente
    echo "Inicio de sesión exitoso.";
    header('Location: materia.html');
} else {
    // Usuario no válido
    echo "Nombre de usuario o contraseña incorrectos.";
}

// Cerrar la conexión
$stmt->close();
$conn->close();
?>
