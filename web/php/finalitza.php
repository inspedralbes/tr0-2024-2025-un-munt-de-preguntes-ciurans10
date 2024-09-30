<?php
session_start();
header('Content-Type: application/json');

// Llegeix el contingut de la petició POST
$json = file_get_contents('php://input');
$data = json_decode($json, true);

if ($data) {
    $_SESSION['respostes'] = $data['preguntes']; 
    $_SESSION['score'] = 5; 
    $response = ['puntuacio' => $_SESSION['score']];
} else {
    $response = ['error' => 'No s\'han rebut dades'];
}

echo json_encode($response);
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
