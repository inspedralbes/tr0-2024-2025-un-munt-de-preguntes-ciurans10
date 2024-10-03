<?php
    $host = "localhost";    
    $user = "marc";         
    $password = "root";        
    $dbname = "preguntasMarc";  


    $conn = new mysqli($host, $user, $password, $dbname);

    if ($conn->connect_error) {
        die("Error de conexión: " . $conn->connect_error);
    }
