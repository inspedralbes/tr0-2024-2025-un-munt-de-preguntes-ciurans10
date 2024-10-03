<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
session_start();
header('Content-Type: application/json');

$json = file_get_contents('php://input');

if (empty($json)) {
    $response = [
        'error' => 'No se ha recibido ningún dato en el cuerpo de la solicitud.',
    ];
    echo json_encode($response);
    exit;
}

$data = json_decode($json, true);

if (isset($data['preguntes']) && is_array($data['preguntes'])) {
    $respostesCorrectes = [1, 0, 1, 2, 1, 1, 1, 1, 2, 1]; 
    $puntuacio = 0;
    $respostesDetall = []; 

    foreach ($data['preguntes'] as $index => $pregunta) {
        if (!isset($pregunta['id'], $pregunta['resposta'])) {
            continue; 
        }

        $correcta = isset($respostesCorrectes[$pregunta['id']]) ? $respostesCorrectes[$pregunta['id']] : null;
        $seleccionada = $pregunta['resposta'];

        if ($seleccionada !== null && $seleccionada == $correcta) {
            $puntuacio += 1; 
        }

        $respostesDetall[] = [
            'pregunta_id' => $pregunta['id'],
            'respuesta_correcta' => $correcta,
            'seleccionada' => $seleccionada,
            'acertada' => ($seleccionada === $correcta)
        ];
    }

    $_SESSION['score'] = $puntuacio;

    $response = [
        'puntuacio' => $puntuacio,
        'respostes_detallades' => $respostesDetall
    ];
} else {
    $response = [
        'error' => 'No se han recibido datos correctamente o la estructura de datos no es válida',
        'data_recibida' => $data 
    ];
}

echo json_encode($response); 
?>
