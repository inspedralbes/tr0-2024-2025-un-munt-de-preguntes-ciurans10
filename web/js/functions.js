/*fetch('http://localhost/data.json');
   then(response=>response.json())
   .then(data=>{
      console.log(data)
     pintaPreguntes(data);
  })*/


     if (!sessionStorage.getItem('data')) {
        const data={
        
                "preguntes":[
                   {
                      "id":1,
                      "pregunta":"Quin senyal indica que no pots girar a l'esquerra?",
                      "respostes":[
                         "Senyal A",
                         "Senyal B",
                         "Senyal C"
                      ],
                      "resposta_correcta":1,
                      "imatge":"https://media.istockphoto.com/id/1304861449/es/foto/se%C3%B1ale-de-tr%C3%A1fico-sin-giro-a-la-izquierda.jpg?s=612x612&w=0&k=20&c=ntl0o1AWSzyMvYyT0hMgyJWngtrixCUQYqie5xX0JAk="
                   },
                   {
                      "id":2,
                      "pregunta":"Quina és la velocitat màxima permesa en una zona residencial?",
                      "respostes":[
                         "30 km/h",
                         "50 km/h",
                         "70 km/h"
                      ],
                      "resposta_correcta":0,
                      "imatge":"https://upload.wikimedia.org/wikipedia/commons/3/3a/Limite_velocidad_90_autovia.png"
                   },
                   {
                      "id":3,
                      "pregunta":"Què significa el senyal de color blau amb una bicicleta?",
                      "respostes":[
                         "Zona d'aparcament de bicicletes",
                         "Carril bici obligatori",
                         "Prohibit el pas de bicicletes"
                      ],
                      "resposta_correcta":1,
                      "imatge":"https://www.barcelona.cat/mobilitat/sites/default/files/styles/wide/public/2023-08/Senyal_carrilbici.jpg?itok=DW3qjC7t"
                   },
        
                   {
                      "id":4,
                      "pregunta":"Quan es pot avançar per la dreta en una autopista?",
                      "respostes":[
                         "Quan el vehicle davant teu està parat",
                         "Quan el vehicle davant teu gira a l'esquerra",
                         "Mai es pot avançar per la dreta"
                      ],
                      "resposta_correcta":2,
                      "imatge":"https://www.shutterstock.com/image-photo/ostrava-czech-republic-march-23-600nw-2454903557.jpg"
                   },
                   {
                      "id":5,
                      "pregunta":"Què has de fer quan veus un senyal de STOP?",
                      "respostes":[
                         "Reduir la velocitat i continuar si no hi ha vehicles",
                         "Aturar-te completament i cedir el pas",
                         "Tocar el clàxon per avisar altres vehicles"
                      ],
                      "resposta_correcta":1,
                      "imatge":"https://t1.uc.ltmcdn.com/es/posts/5/9/6/como_actuar_ante_una_senal_de_stop_18695_600.jpg"
                   },
                   {
                      "id":6,
                      "pregunta":"Quin document és necessari per conduir un vehicle?",
                      "respostes":[
                         "El passaport",
                         "El carnet de conduir",
                         "El certificat de naixement"
                      ],
                      "resposta_correcta":1,
                      "imatge":"https://comprar-coches-de-ocasion.com/wp-content/uploads/2020/04/documentacion-coche-830x460.jpg"
                   },
                   {
                      "id":7,
                      "pregunta":"Quina és la distància mínima que s'ha de mantenir amb el vehicle de davant?",
                      "respostes":[
                         "50 metres",
                         "La distància de seguretat depèn de la velocitat",
                         "100 metres"
                      ],
                      "resposta_correcta":1,
                      "imatge":"https://www.autopista.es/uploads/s1/96/19/31/5/los-casos-en-los-que-si-se-puede-adelantar-con-la-senal-de-prohibido-imagen-dgt.jpeg"
                   },
                   {
                      "id":8,
                      "pregunta":"Quina llum s'ha d'utilitzar quan es condueix en condicions de boira intensa?",
                      "respostes":[
                         "Llums de posició",
                         "Llums antiboira",
                         "Llums de carretera"
                      ],
                      "resposta_correcta":1,
                      "imatge":"https://img.freepik.com/vector-gratis/composicion-moderna-luces-coche_1284-21373.jpg"
                   },
                   {
                      "id":9,
                      "pregunta":"Què indica un semàfor amb llum verda?",
                      "respostes":[
                         "Aturar-se",
                         "Passar amb precaució",
                         "El pas està permès"
                      ],
                      "resposta_correcta":2,
                      "imatge":"https://s03.s3c.es/imag/_v0/1200x655/a/1/3/Semaforo.jpg"
                   },
                   {
                      "id":10,
                      "pregunta":"Què significa una línia contínua al mig de la carretera?",
                      "respostes":[
                         "Es pot avançar si no hi ha vehicles de cara",
                         "Prohibit avançar",
                         "Només es pot avançar de nit"
                      ],
                      "resposta_correcta":1,
                      "imatge":"https://as2.ftcdn.net/v2/jpg/00/98/94/93/1000_F_98949316_Z1IMPcxnyeFY2VGdHB6VsMP3HcTfLMJk.jpg"
                   },
                   {
                      "id":11,
                      "pregunta":"En quin cas has de cedir el pas a un vianant?",
                      "respostes":[
                         "Quan el vianant està creuant un pas de zebra",
                         "Quan el vianant està esperant a la vorera",
                         "Mai s'ha de cedir el pas als vianants"
                      ],
                      "resposta_correcta":0,
                      "imatge":"https://static1.ara.cat/clip/d2c7734e-264d-47ee-b119-44b83117e6d6_16-9-aspect-ratio_default_0.jpg"
                   },
                   {
                      "id":12,
                      "pregunta":"Quina és la velocitat màxima permesa en una autopista?",
                      "respostes":[
                         "120 km/h",
                         "100 km/h",
                         "90 km/h"
                      ],
                      "resposta_correcta":0,
                      "imatge":"https://img.freepik.com/foto-gratis/coches-conduciendo-vista-aerea-calle_23-2148959699.jpg"
                   },
                   {
                      "id":13,
                      "pregunta":"Què significa un senyal triangular amb una exclamació?",
                      "respostes":[
                         "Perill general",
                         "Cediu el pas",
                         "Atenció, obres"
                      ],
                      "resposta_correcta":0,
                      "imatge":"https://www.publicdomainpictures.net/pictures/350000/nahled/traffic-sign-and-exclamation-sign-on-wall-texture-background-de-1591643768Yxs.jpg"
                   },
                   {
                      "id":14,
                      "pregunta":"Què s'ha de fer en una rotonda?",
                      "respostes":[
                         "Entrar directament i cedir el pas als vehicles que venen per la dreta",
                         "Cedir el pas als vehicles que ja estan dins la rotonda",
                         "Accelerar per entrar primer"
                      ],
                      "resposta_correcta":1,
                      "imatge":"https://media.istockphoto.com/id/493685152/es/foto/vista-a%C3%A9rea-de-la-rotonda.jpg?s=612x612&w=0&k=20&c=mytRgX8gff_vdOH3ShWdtJ30xenvGrvlkgD54c3Aogk="
                   },
                   {
                      "id":15,
                      "pregunta":"Què indica un senyal de prohibició amb una X vermella?",
                      "respostes":[
                         "Prohibit girar a l'esquerra",
                         "Prohibit estacionar",
                         "Prohibit avançar"
                      ],
                      "resposta_correcta":1,
                      "imatge":"https://noticias.coches.com/wp-content/uploads/2023/01/senal-prohibido-aparcar-3-326x406.jpeg"
                   }
                ]
              };
                sessionStorage.setItem('data', JSON.stringify(data));
             }
        
             const storedData = JSON.parse(sessionStorage.getItem('data'));

let htmlString = '';
let selectedAnswers = {};

// Generar las preguntas y opciones
for (let index = 0; index < storedData.preguntes.length; index++) {
    let pregunta = storedData.preguntes[index].pregunta;
    let imatge = storedData.preguntes[index].imatge;
    let opcions = storedData.preguntes[index].respostes;

    htmlString += `<h3>${pregunta}</h3>`;
    htmlString += `<img src="${imatge}" alt="Imatge de la pregunta"><br>`;

    for (let j = 0; j < opcions.length; j++) {
        htmlString += `<button onclick="mostrarAlerta(${j}, ${index})">${opcions[j]}</button><br>`;
    }
    htmlString += `<hr>`;
}

// Función para mostrar si la respuesta es correcta o incorrecta
function mostrarAlerta(indiceRespuesta, indexPregunta) {
    const respostaCorrecta = storedData.preguntes[indexPregunta].resposta_correcta;
    selectedAnswers[indexPregunta] = indiceRespuesta;

    if (indiceRespuesta === respostaCorrecta) {
        console.log(`Pregunta ${indexPregunta + 1}, Resposta ${indiceResposta + 1}`);
    } else {
        console.log(`Pregunta ${indexPregunta + 1}, Resposta ${indiceResposta + 1}`);
    }
}

// Colocar el botón de enviar respuestas fuera del bucle
htmlString += `<br><br><button onclick="enviarRespostes()">Enviar Respostes</button>`;

// Función para enviar las respuestas seleccionadas
function enviarRespostes() {
    const selectedAnswersJSON = JSON.stringify(selectedAnswers);
    console.log('Botón enviar presionado');
    fetch('guardarRespostes.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: selectedAnswersJSON
    })
    .then(response => response.json())
    .then(data => {
        // Redirigir a la página de resultados
        window.location.href = `resultats.php?puntuacio=${data.puntuacio}&total=${storedData.preguntes.length}`;
    })
    .catch(error => console.error('Error:', error));
}

// Mostrar el contenido generado en el documento
const divPartida = document.getElementById("partida");
divPartida.innerHTML = htmlString;
