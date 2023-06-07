$(document).ready(function(){
    fetch('preguntasRespuestas.json')
  .then(response => response.json())
  .then(data => {
    // Aquí puedes manipular los datos del archivo JSON
        arrayPreguntas = [
            data.op1.pregunta, 
            data.op2.pregunta, 
            data.op3.pregunta,
            data.op4.pregunta,
            data.op5.pregunta,
            data.op6.pregunta,
            data.op7.pregunta];

        arrayRespuestas = [
            data.op1.respuesta, 
            data.op2.respuesta, 
            data.op3.respuesta,
            data.op4.respuesta,
            data.op5.respuesta,
            data.op6.respuesta,
            data.op7.respuesta];

            $("#msjs").append('<p id="respuestaMsjs">Hola, Soy Alpha el ChatbBot de portafolio ¿Qué te gustaria preguntarme?</p>');            

    for (let i = 0; i < arrayPreguntas.length; i++) {
        $("#options").append('<button id="optBtn' + [i] + '">' + JSON.stringify(arrayPreguntas[i]).replace(/"/g, '') + '</button>');

        $("#optBtn" + i).click(function() {
                $("#msjs").append('<p id="preguntaMsjs">' + JSON.stringify(arrayPreguntas[i]).replace(/"/g, '') + '</p>');
                $("#msjs").append('<p id="respuestaMsjs">' + JSON.stringify(arrayRespuestas[i]).replace(/"/g, '') + '</p>');
                $("#optBtn" + i).remove();
            }
        );
    
    }

    console.log(arrayPreguntas);

  })
  .catch(error => {
    // Manejo de errores si ocurre alguno durante la carga del archivo JSON
    console.error('Error al cargar el archivo JSON:', error);
  });    
});

