// Función para verificar si la respuesta del usuario es correcta
const esCorrecta = (respuestaUsuario, respuestaCorrecta) => respuestaUsuario === respuestaCorrecta;

// Función para obtener la respuesta del usuario para una pregunta específica
const obtenerRespuestaUsuario = pregunta => {
    const respuestaUsuario = prompt(`Escribe tu respuesta para: "${pregunta.pregunta}". Las opciones son: ${pregunta.opciones.join(', ')}`);
    return { ...pregunta, respuestaUsuario };
};

// Función para evaluar la respuesta del usuario
const evaluarRespuesta = pregunta => {
    if (esCorrecta(pregunta.respuestaUsuario, pregunta.respuestaCorrecta)) {
        alert("¡Respuesta correcta!");
    } else {
        alert(`Incorrecto, la respuesta correcta es ${pregunta.respuestaCorrecta}`);
    }
};

// Función para procesar todas las preguntas
const procesarPreguntas = preguntas => {
    preguntas.map(obtenerRespuestaUsuario).forEach(evaluarRespuesta);
};

// Función para crear una pregunta
const crearPregunta = index => {
    const preguntaTexto = prompt(`Ingresa la pregunta ${index + 1}:`);
    const numOpciones = parseInt(prompt(`¿Cuántas opciones tiene la pregunta ${index + 1}?`), 10);
    const opciones = Array.from({ length: numOpciones }, (_, j) => prompt(`Ingresa la opción ${j + 1} para la pregunta ${index + 1}:`));
    const respuestaCorrecta = prompt(`Ingresa la respuesta correcta para la pregunta ${index + 1}:`);
    return { pregunta: preguntaTexto, opciones, respuestaCorrecta, respuestaUsuario: "" };
};

// Función para crear preguntas ingresadas por el usuario
const crearPreguntas = () => {
    const numPreguntas = parseInt(prompt("¿Cuántas preguntas quieres agregar?"), 10);
    return Array.from({ length: numPreguntas }, (_, i) => crearPregunta(i));
};

// Crear preguntas ingresadas por el usuario
const preguntasUsuario = crearPreguntas();

// Verificar si se han creado preguntas antes de iniciar la trivia
if (preguntasUsuario.length === 0) {
    console.log("No hay preguntas almacenadas");
} else {
    procesarPreguntas(preguntasUsuario);
}
