<?php
session_start();

$jsonData = file_get_contents('preguntas.json');
$questionsData = json_decode($jsonData, true); 
$questions = $questionsData['preguntes'];

if ($_SERVER["REQUEST_METHOD"] == "GET") {

    header('Content-Type: application/json');
    echo json_encode(['preguntes' => $questions]);
    exit();
}
echo json_encode(['preguntes' => $questions], JSON_UNESCAPED_UNICODE);

?>
