<?php
session_start();

// Mostrar la puntuació final
$score = $_SESSION['score'];
$total_questions = count($_SESSION['respostes']);

// Reiniciar el qüestionari
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    session_destroy();
    header("Location: index.php");
    exit();
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Resultados</title>
</head>
<body>
    <center>
    <h1>Resultados</h1>
    <p>Tu puntuacion: <?= $score ?> / <?= $total_questions ?></p>

    <form method="post">
        <input type="submit" value="Reiniciar preguntas">
    </form>
</center>
</body>
</html>
