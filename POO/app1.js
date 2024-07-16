class Pregunta {
    constructor(pregunta, opciones, respuestaCorrecta, respuestaUsuario) {
        this.pregunta = pregunta;
        this.opciones = opciones;
        this.respuestaCorrecta = respuestaCorrecta;
        this.respuestaUsuario = respuestaUsuario;
    }

    esCorrecta() {
        return this.respuestaUsuario === this.respuestaCorrecta;
    }
}

class Encuesta {
    constructor(preguntas) {
        this.preguntas = preguntas;
    }

    trivia() {
        this.preguntas.forEach(pregunta => {
            const respuestaUsuario = prompt(`Escribe tu respuesta para: "${pregunta.pregunta}". Las opciones son: ${pregunta.opciones.join(', ')}`);
            pregunta.respuestaUsuario = respuestaUsuario;

            if (pregunta.esCorrecta()) {
                alert("¡Respuesta correcta!");
            } else {
                alert(`Incorrecto, la respuesta correcta es ${pregunta.respuestaCorrecta}`);
            }
        });
    }
}

// Función para crear preguntas ingresadas por el usuario
function crearPreguntas() {
    const preguntas = [];
    const numPreguntas = parseInt(prompt("¿Cuántas preguntas quieres agregar?"), 10);

    for (let i = 0; i < numPreguntas; i++) {
        const preguntaTexto = prompt(`Ingresa la pregunta ${i + 1}:`);
        const opciones = [];
        const numOpciones = parseInt(prompt(`¿Cuántas opciones tiene la pregunta ${i + 1}?`), 10);

        for (let j = 0; j < numOpciones; j++) {
            opciones.push(prompt(`Ingresa la opción ${j + 1} para la pregunta ${i + 1}:`));
        }

        const respuestaCorrecta = prompt(`Ingresa la respuesta correcta para la pregunta ${i + 1}:`);
        const pregunta = new Pregunta(preguntaTexto, opciones, respuestaCorrecta, "");
        preguntas.push(pregunta);
    }
    return preguntas;
}

// Crear preguntas ingresadas por el usuario
const preguntasUsuario = crearPreguntas();

// Verificar si se han creado preguntas antes de iniciar la trivia
if (preguntasUsuario.length === 0) {
    console.log("No hay preguntas almacenadas");
} else {
    const encuesta1 = new Encuesta(preguntasUsuario);
    encuesta1.trivia();
}