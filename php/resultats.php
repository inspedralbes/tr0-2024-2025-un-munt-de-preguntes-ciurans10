<?php
// Obtener la puntuación y el total de preguntas desde los parámetros GET
$puntuacio = isset($_GET['puntuacio']) ? $_GET['puntuacio'] : 0;
$total = isset($_GET['total']) ? $_GET['total'] : 0;
?>

<!DOCTYPE html>
<html lang="ca">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Resultats</title>
</head>
<body>
    <h1>Resultats del Test</h1>
    <p>Has obtingut una puntuació de <?php echo htmlspecialchars($puntuacio); ?> de <?php echo htmlspecialchars($total); ?>.</p>

    <!-- Botón para reiniciar el test -->
    <form action="index.php" method="get">
        <button type="submit">Tornar a Iniciar</button>
    </form>
</body>
</html>
