<?php
session_start();
include('connexion.php');

$correctas = 0;
$incorrectes = [];
$preguntaIncorrecte = [];

$import = file_get_contents("php://input");
$data = json_decode($import, true);

$consulta = "SELECT * FROM preguntas_respuestas";
$resultado = $conn->query($consulta);

$resultadosArray = [];
while ($fila = $resultado->fetch_assoc()) {
    $resultadosArray[] = $fila;
}

    foreach ($resultadosArray as $i => $resultat) {

            if ($data[$i]['respuestaSeleccionada'] == $resultat["resposta_correcta"]) { 
                $correctas++;
            } else {
               
                $preguntaIncorrecte[] = $resultat["pregunta"]; 
                $incorrectes[] = $resultat["resposta_correcta"]; 
            }
        }
        
$_SESSION['correctas'] = $correctas;
$_SESSION['incorrectes'] = $incorrectes;
$_SESSION['preguntaIncorrecte'] = $preguntaIncorrecte;

echo json_encode([
    "correctas" => $correctas,
    "incorrectes" => $incorrectes,
    "preguntaIncorrecte" => $preguntaIncorrecte
]);
?>
