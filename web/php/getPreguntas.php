<?php
session_start();

// Llegir el fitxer JSON de preguntes
$jsonData = file_get_contents('http://localhost/tr0-2024-2025-un-munt-de-preguntes-ciurans10/web/preguntas.json');
$questionsData = json_decode($jsonData, true); 
$questions = $questionsData['preguntes'];

// Inicialitzar les variables de sessió si és la primera vegada
if (!isset($_SESSION['current_question'])) {
    $_SESSION['current_question'] = 0;
    $_SESSION['score'] = 0;
    $_SESSION['respostes'] = [];
}
$jsonData = file_get_contents($jsonFile);


?>