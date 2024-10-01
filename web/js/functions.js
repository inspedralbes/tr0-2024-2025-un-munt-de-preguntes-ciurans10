const estatPartida= {
   contadorPreguntes:0,
   preguntes:[
   {id:0, feta:true , resposta:1},
   {id:1, feta:true , resposta:0},
   {id:2, feta:true , resposta:1},
   {id:3, feta:true , resposta:2},
   {id:4, feta:true , resposta:1},
   {id:5, feta:true , resposta:1},
   {id:6, feta:true , resposta:1},
   {id:7, feta:true , resposta:1},
   {id:8, feta:true , resposta:2},
   {id:9, feta:true , resposta:1}
   ]   
   }
   let arrayPreguntesGlobal = []; 

   document.addEventListener("DOMContentLoaded", function () {
      fetch('preguntas.json')
          .then(response => response.json())
          .then(data => {
              console.log('Preguntas cargadas:', data);
              arrayPreguntesGlobal = data.preguntes; 
              pintaPreguntes(arrayPreguntesGlobal);
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
               htmlString += `<button onclick="apretarBoto(${index},${j})">${opcions[j]}</button><br>`;
            }
            htmlString += `<hr>`;
         }
   
         htmlString += `<br><br><button onclick="enviarRespostes()">Enviar Respostes</button>`;
   
         const divPartida = document.getElementById("partida");
         divPartida.innerHTML = htmlString;
   }
   
   function enviarRespostes() {
       let htmlString = '';
       const selectedAnswersJSON = JSON.stringify(estatPartida);
       console.log('Botón enviar presionado');
       
       fetch('http://localhost/tr0-2024-2025-un-munt-de-preguntes-ciurans10/web/php/finalitza.php', {
           method: 'POST',
           headers: {
               'Content-Type': 'application/json'
           },
           body: selectedAnswersJSON
       })
       .then(response => response.json())
       .then(data => {
           console.log('Respuesta del servidor:', data);
           
           if (data.puntuacio !== undefined) {
               window.location.href = `http://localhost/tr0-2024-2025-un-munt-de-preguntes-ciurans10/web/php/finalitza.php`;
           } else {
               console.error('Error en la respuesta del servidor: ', data);
           }
       })
   }
   
   function apretarBoto(indexPregunta, indexResposta){
      console.log("Has apretat la pregunta" + indexPregunta + " y la resposta" + indexResposta);
      
      estatPartida.preguntes[indexPregunta].feta = true;
      estatPartida.preguntes[indexPregunta].resposta = indexResposta;
   }
   