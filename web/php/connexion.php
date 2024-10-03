<?php

$host = "localhost";    
$user = "root";         
$password = "";        
$dbname = "preguntasMarc";  

// Crear la conexión con mysqli
$conn = new mysqli($host, $user, $password, $dbname);

// Verificar si la conexión tuvo éxito
if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}

// Consulta para obtener todas las preguntas
$sql = "SELECT id, pregunta, resposta_correcta, imatge FROM preguntas";
$result = $conn->query($sql);

// Verificar si se obtuvieron resultados
if ($result->num_rows > 0) {
    // Recorrer y mostrar cada pregunta
    while ($row = $result->fetch_assoc()) {
        echo "<div>";
        echo "<h2>Pregunta: " . $row['pregunta'] . "</h2>";
        echo "<p>ID de pregunta: " . $row['id'] . "</p>";
        echo "<p>Respuesta correcta: " . $row['resposta_correcta'] . "</p>";
        if (!empty($row['imatge'])) {
            echo "<img src='" . $row['imatge'] . "' alt='Imagen de la pregunta' style='width:200px;'><br>";
        }
        echo "</div><br>";
    }
} else {
    echo "No se encontraron preguntas en la base de datos.";
}

// Cerrar la conexión
$conn->close();
?>

