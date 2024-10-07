<?php
session_start();

// Verificar si la sesión contiene las preguntas
if (!isset($_SESSION['preguntes'])) {
    http_response_code(400); // Solicitud incorrecta
    echo json_encode(['error' => 'No se encontraron las preguntas en la sesión']);
    exit();
}

// Obtener las preguntas desde la sesión
$preguntes = json_decode($_SESSION['preguntes'], true);

// Verificar que las preguntas se decodificaron correctamente
if (json_last_error() !== JSON_ERROR_NONE) {
    http_response_code(400); // Solicitud incorrecta
    echo json_encode(['error' => 'Error al decodificar las preguntas']);
    exit();
}

// Obtener las respuestas del usuario desde la solicitud POST
$respostesUsuari = json_decode(file_get_contents('php://input'), true);

// Verificar que las respuestas se decodificaron correctamente
if (json_last_error() !== JSON_ERROR_NONE) {
    http_response_code(400); // Solicitud incorrecta
    echo json_encode(['error' => 'Error al decodificar las respuestas del usuario']);
    exit();
}

// Contar cuántas respuestas son correctas
$puntuacio = 0;
foreach ($respostesUsuari as $indexPregunta => $respostaSeleccionada) {
    if (isset($preguntes['preguntes'][$indexPregunta]) &&
        $respostaSeleccionada == $preguntes['preguntes'][$indexPregunta]['resposta_correcta']) {
        $puntuacio++;
    }
}

// Retornar la puntuación en formato JSON
header('Content-Type: application/json');
echo json_encode([
    'puntuacio' => $puntuacio
]);
?>
