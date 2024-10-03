<?php
include ("connexion.php");

$sql = "SELECT * FROM preguntas_respuestas";
$result = $conn->query($sql);

$preguntas = [];

    while ($row = $result->fetch_assoc()) {
        $respuestas = [
            $row['resposta1'],
            $row['resposta2'],
            $row['resposta3']
        ];
        shuffle($respuestas); 

        $preguntas[] = [
            'id' => $row['id'],
            'pregunta' => $row['pregunta'],
            'respuestas' => $respuestas,
            'respuesta_correcta' => $row['resposta_correcta'],
            'imatge' => $row['imatge']
        ];
    }

echo json_encode($preguntas);
?>
