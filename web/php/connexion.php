<?php
/*
    $host = "localhost";    
    $user = "marc";         
    $password = "root";        
    $dbname = "preguntasMarc";  
*/

    $host = "localhost";    
    $user = "a23marciucar_marc";         
    $password = "Elciurans_10";        
    $dbname = "a23marciucar_marc";  

    $conn = new mysqli($host, $user, $password, $dbname);

    if ($conn->connect_error) {
        die("Error de conexión: " . $conn->connect_error);
    }
