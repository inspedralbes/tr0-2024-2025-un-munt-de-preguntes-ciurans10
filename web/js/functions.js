const estatPartida= {
   contadorPreguntes:0,
   preguntes:[
   {id:0, feta:false , resposta:0},
   {id:0, feta:false , resposta:0},
   {id:0, feta:false , resposta:0},
   {id:0, feta:false , resposta:0},
   {id:0, feta:false , resposta:0},
   {id:0, feta:false , resposta:0},
   {id:0, feta:false , resposta:0}
   ]   
   }
document.addEventListener("DOMContentLoaded", function () {
   fetch('preguntas.json')
       .then(response => response.json())
       .then(data => {
           console.log('Preguntas cargadas:', data);
           pintaPreguntes(data.preguntes);
       })
       .catch(error => console.error('Error al cargar las preguntas:', error));
});

function pintaPreguntes(arrayPreguntes){
      let htmlString = '';

      // Generar las preguntas y opciones
      for (let index = 0; index < arrayPreguntes.length; index++) {
         let pregunta = arrayPreguntes[index].pregunta;
         let imatge = arrayPreguntes[index].imatge;
         let opcions = arrayPreguntes[index].respostes;

         htmlString += `<h3>${pregunta}</h3>`;
         htmlString += `<img src="${imatge}" alt="Imatge de la pregunta"><br>`;

         for (let j = 0; j < opcions.length; j++) {
            htmlString += `<button onclick="apretarBoto(${index},${j} )">${opcions[j]}</button><br>`;
         }
         htmlString += `<hr>`;
      }

      // Colocar el botón de enviar respuestas fuera del bucle
      htmlString += `<br><br><button onclick="enviarRespostes()">Enviar Respostes</button>`;

      // Mostrar el contenido generado en el documento
      const divPartida = document.getElementById("partida");
      divPartida.innerHTML = htmlString;
}

// Función para enviar las respuestas seleccionadas
function enviarRespostes() {
    const selectedAnswersJSON = JSON.stringify(estatPartida);
    console.log('Botón enviar presionado');
    fetch('http://localhost/tr0-2024-2025-un-munt-de-preguntes-ciurans10/web/php/finalitza.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: selectedAnswersJSON
    })
    .then(data => {
        console.log('Datos recibidos del servidor:', data);
        window.location.href = `http://localhost/tr0-2024-2025-un-munt-de-preguntes-ciurans10/web/php/finalitza.php?puntuacio=${data.puntuacio}&total=${estatPartida.preguntes.length}`;
    })
    .catch(error => console.error('Error:', error));
}    

function apretarBoto(indexPregunta, indexResposta){
   console.log("Has apretat la pregunta" + indexPregunta + " y la resposta" + indexResposta);
   //ARA HEM D'ACTUALITZAR EL ESTAT DE LA PARTIDA
}