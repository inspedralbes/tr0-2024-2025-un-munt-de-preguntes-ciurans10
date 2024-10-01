<?php
session_start();
header('Content-Type: application/json');

$json = file_get_contents('php://input');

// Verificar si se recibió el cuerpo de la solicitud
if (empty($json)) {
    $response = [
        'error' => 'No se ha recibido ningún dato en el cuerpo de la solicitud.',
    ];
    echo json_encode($response);
    exit;
}

// Intentar decodificar el JSON
$data = json_decode($json, true);

// Verificar si hubo un error en la decodificación JSON
if (json_last_error() !== JSON_ERROR_NONE) {
    $response = [
        'error' => 'Error de decodificación JSON: ' . json_last_error_msg(),
        'json_recibido' => $json
    ];
    echo json_encode($response);
    exit;
}

// Comprobar si la estructura de datos es la esperada
if (isset($data['preguntes']) && is_array($data['preguntes'])) {
    $_SESSION['respostes'] = $data['preguntes'];

    $respostesCorrectes = [1, 0, 1, 2, 1, 1, 1, 1, 2, 1]; 

    $puntuacio = 0;
    $respostesCorrectesCount = 0;
    $respostesDetall = [];  

    $totalPreguntes = count($data['preguntes']);
    if ($totalPreguntes > count($respostesCorrectes)) {
        $response = [
            'error' => 'La cantidad de preguntas recibidas supera la cantidad de respuestas correctas definidas.'
        ];
        echo json_encode($response);
        exit; 
    }

    foreach ($data['preguntes'] as $index => $pregunta) {
        $correcta = isset($respostesCorrectes[$index]) ? $respostesCorrectes[$index] : null;
        $seleccionada = isset($pregunta['resposta']) ? $pregunta['resposta'] : null;

        if ($seleccionada !== null && $seleccionada == $correcta) {
            $puntuacio += 1;
            $respostesCorrectesCount += 1;
        }

        $respostesDetall[] = [
            'pregunta_id' => $pregunta['id'],
            'correcta' => $correcta,
            'seleccionada' => $seleccionada,
            'acertada' => $seleccionada == $correcta
        ];
    }

    $_SESSION['score'] = $puntuacio;

    $response = [
        'puntuacio' => $_SESSION['score'],
        'respostes_correctes' => $respostesCorrectesCount,
        'total_preguntes' => $totalPreguntes,
        'detall_respostes' => $respostesDetall  
    ];
} else {
    $response = [
        'error' => 'No se han recibido datos correctamente o la estructura de datos no es válida',
        'data_recibida' => $data 
    ];
}

// Devolver la respuesta en formato JSON
echo json_encode($response);
?>