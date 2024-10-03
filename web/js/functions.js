const estatPartida = {
    preguntes: [] 
};

fetch ('http://localhost/tr0-2024-2025-un-munt-de-preguntes-ciurans10/web/php/getPreguntas.php')
    .then(response => response.json())
    .then(data => {
        arrayPreguntesGlobal = data;
        pintaPreguntes(arrayPreguntesGlobal); 
    })
    .catch(error => console.error('Error al cargar las preguntas:', error)); 

function pintaPreguntes(arrayPreguntes) {
    let htmlString = '';

    for (let index = 0; index < arrayPreguntes.length; index++) {
        let pregunta = arrayPreguntes[index].pregunta;
        let imatge = arrayPreguntes[index].imatge;
        let opcions = arrayPreguntes[index].respuestas; 

        htmlString += `<h3>${pregunta}</h3>`;
        htmlString += `<img src="${imatge}" alt="Imatge de la pregunta"><br>`;

        for (let j = 0; j < opcions.length; j++) {
            htmlString += `<button onclick="apretarBoto(${index},${j})">${opcions[j]}</button><br>`;
        }
        htmlString += `<hr>`;
    }

    htmlString += `<br><br><button onclick="enviarRespostes()">Enviar Respostes</button>`;

    const divPartida = document.getElementById("partida");
    divPartida.innerHTML = htmlString; 
}
