<?php
session_start();

// Definir las preguntas (aquí debes usar las preguntas de tu archivo JSON o base de datos)
$preguntes = [
    "preguntes" => [
        [
            "id" => 1,
            "pregunta" => "Quin senyal indica que no pots girar a l'esquerra?",
            "respostes" => ["Senyal A", "Senyal B", "Senyal C"],
            "resposta_correcta" => 1,
            "imatge" => "https://media.istockphoto.com/id/1304861449/es/foto/se%C3%B1ale-de-tr%C3%A1fico-sin-giro-a-la-izquierda.jpg?s=612x612&w=0&k=20&c=ntl0o1AWSzyMvYyT0hMgyJWngtrixCUQYqie5xX0JAk="
        ],

    ]
];

// Guardar las preguntas en la variable de sesión
$_SESSION['preguntes'] = json_encode($preguntes);

?>

<!DOCTYPE html>
<html lang="ca">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Examen</title> 
</head>
<body>
    <div id="partida"></div>
    <script src="js/functions.js"></script>
</body>
</html>
