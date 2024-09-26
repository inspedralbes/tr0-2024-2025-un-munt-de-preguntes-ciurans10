<?php
session_start();

// Llegir el fitxer JSON de preguntes
$jsonData = file_get_contents('preguntas.json');
$questionsData = json_decode($jsonData, true); 
$questions = $questionsData['preguntes'];

// Inicialitzar les variables de sessió si és la primera vegada
if (!isset($_SESSION['current_question'])) {
    $_SESSION['current_question'] = 0;
    $_SESSION['score'] = 0;
    $_SESSION['respostes'] = [];
}

// Control del formulari després d'una resposta
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $selected_answer = intval($_POST['respostes']);  
    $current_question = $_SESSION['current_question']; 
    $correct_answer = $questions[$current_question]['resposta_correcta']; 

    // Guardar la resposta de l'usuari
    $_SESSION['respostes'][$current_question] = $selected_answer;

    // Comprovar si l'usuari ha encertat la resposta
    if ($selected_answer == $correct_answer) {
        $_SESSION['score']++;
        $feedback = "Correcto!";
    } else {
        $feedback = "Incorrecto! La respuesta era: " . $questions[$current_question]['respostes'][$correct_answer];
    }

    // Passar a la següent pregunta
    $_SESSION['current_question']++;

    // Si s'han respost totes les preguntes, redirigir a la pàgina de resultats
    if ($_SESSION['current_question'] >= count($questions)) {
        header("Location: resultats.php");
        exit();
    }
} else {
    $feedback = '';
}

// Recuperar la pregunta actual
$current_question = $_SESSION['current_question'];
$question = $questions[$current_question];
?>

<!DOCTYPE html>
<html>
<head>
    <title>Juego</title>
</head>
<body>
    <center>
    <h1>Juego</h1>

    <p>Pregunta <?= $current_question + 1 ?> de <?= count($questions) ?>:</p>
    <p><?= $question['pregunta'] ?></p>

    <form method="post" action="index.php">
        <?php foreach ($question['respostes'] as $index => $answer): ?>
            <input type="radio" name="answer" value="<?= $index ?>" required> <?= $answer ?><br>
        <?php endforeach; ?>
        <br>
        <input type="submit" value="Submit">
    </form>

    <p><?= $feedback ?></p>
        </center>
</body>
</html>
