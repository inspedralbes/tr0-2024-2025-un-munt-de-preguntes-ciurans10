<?php
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

    $totalPreguntes = count($data['preguntes']);
    
    // Comprobar que el total de preguntas no exceda las respuestas correctas
    if ($totalPreguntes > count($respostesCorrectes)) {
        $response = [
            'error' => 'La cantidad de preguntas recibidas supera la cantidad de respuestas correctas definidas.'
        ];
        echo json_encode($response);
        exit; 
    }

    foreach ($data['preguntes'] as $index => $pregunta) {
        // Obtener la respuesta correcta y la seleccionada
        $correcta = isset($respostesCorrectes[$index]) ? $respostesCorrectes[$index] : null;
        $seleccionada = isset($pregunta['resposta']) ? $pregunta['resposta'] : null;

        // Comprobar si la respuesta seleccionada es correcta
        if ($seleccionada !== null && $seleccionada == $correcta) {
            $puntuacio += 1; // Aumentar la puntuación
        }

        // Añadir detalles de la respuesta al arreglo
        $respostesDetall[] = [
            'pregunta_id' => $pregunta['id'],
            'pregunta' => $pregunta['pregunta'],
            'respuesta_correcta' => $correcta,
            'seleccionada' => $seleccionada,
            'acertada' => ($seleccionada === $correcta)
        ];
    }

    // Almacenar la puntuación en la sesión (opcional)
    $_SESSION['score'] = $puntuacio;

    // Preparar la respuesta final
    $response = [
        'puntuacio' => $puntuacio,
        'total_preguntes' => $totalPreguntes,
        'respostes_detallades' => $respostesDetall // Devolvemos los detalles de las respuestas
    ];
} else {
    $response = [
        'error' => 'No se han recibido datos correctamente o la estructura de datos no es válida',
        'data_recibida' => $data 
    ];
}

echo json_encode($response); // Enviar la respuesta JSON al cliente
?>
