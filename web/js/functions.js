
let jsonPreguntasSeleccionades = [];

const estatPartida = {
    preguntes: [], 
    respostesSeleccionades: [] 
};

fetch('http://localhost/tr0-2024-2025-un-munt-de-preguntes-ciurans10/web/php/getPreguntas.php')
    .then(response => response.json())
    .then(data => {
        estatPartida.preguntes = data;
        pintaPreguntes(estatPartida.preguntes); 
    })
    .catch(error => console.error('Error al cargar las preguntas:', error)); 

function pintaPreguntes(arrayPreguntes) {
    let htmlString = '';

    for (let index = 0; index < arrayPreguntes.length; index++) {
        let pregunta = arrayPreguntes[index].pregunta;
        let imatge = arrayPreguntes[index].imatge;
        let opcions = arrayPreguntes[index].respuestas; 
        let id_pregunta = arrayPreguntes[index].id;

        htmlString += `<h3>${pregunta} id de pregunta: ${id_pregunta}</h3>`;
        htmlString += `<img src="${imatge}" alt="Imatge de la pregunta"><br>`;

        for (let j = 0; j < opcions.length; j++) {
            htmlString += `<button onclick="apretarBoto(${id_pregunta},'${j}')">${opcions[j]}</button><br>`;
        }
        htmlString += `<hr>`;
    }
    htmlString += `<br><br><button onclick="enviarRespostes()">Enviar Respostes</button>`;

    const divPartida = document.getElementById("partida");
    divPartida.innerHTML = htmlString; 
}

function apretarBoto(indexPregunta, respuestaSeleccionada) {
    estatPartida.respostesSeleccionades[indexPregunta] = respuestaSeleccionada;
    
    const IdPregunta = jsonPreguntasSeleccionades.findIndex(nuevo => nuevo.id_pregunta === indexPregunta);
    if (IdPregunta !== -1) jsonPreguntasSeleccionades.splice(IdPregunta, 1);

    jsonPreguntasSeleccionades.push({
        id_pregunta: indexPregunta,
        respuestaSeleccionada: respuestaSeleccionada
    });

    console.log(JSON.stringify(jsonPreguntasSeleccionades));
}


function enviarRespostes() {
    fetch ("/tr0-2024-2025-un-munt-de-preguntes-ciurans10/web/php/finalitza.php",{
        method: "POST",
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },
        body: JSON.stringify(jsonPreguntasSeleccionades)
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('partida').innerHTML = '';
        document.getElementById('resultados').innerHTML = '';
        mostrarResultats(data);
    })
}

function mostrarResultats(data) {
    let salida = '';
    salida += '<h2>Has fet ' + data.correctas + ' respostes correctes</h2>';
    salida += '<h3>Respostes incorrectes:</h3>';

    if (data.preguntaIncorrecte.length > 0) {
        for (let i = 0; i < data.preguntaIncorrecte.length; i++) {
            salida += '<p><strong>Pregunta:</strong> ' + data.preguntaIncorrecte[i] + '<br>';
            salida += '<strong>Resposta correcta:</strong> ' + data.incorrectes[i] + '</p>';
        }
    } else {
        salida += '<p>Totes les respostes són correctes!</p>';
    }

    salida += '<br><button onclick="redirigirInicio()">Volver al Inicio</button>';

    document.getElementById('partida').innerHTML = salida;
}

function redirigirInicio() {
    window.location.href = 'inicio.html'; 
}


