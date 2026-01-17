juego.iniciar();
actualizarUI();


// main.js
import { Alma } from "./alma.js";
import { preguntas } from "./pregunta.js";

const alma = new Alma("Primera Alma");
const contenedor = document.getElementById("contenedorDePreguntas");

let preguntaActual = "ronda1";

mostrarPregunta(preguntaActual);

function mostrarPregunta(id) {
    const pregunta = preguntas[id];

    contenedor.innerHTML = `
    <p>${pregunta.texto}</p>
    <div class="btn-group-vertical">
        <button id="btnYes" class="btn btn-success">Sí</button>
        <button id="btnNo" class="btn btn-danger">No</button>
    </div>
    `;

    document.getElementById("btnYes").onclick = () => responder(pregunta.yes);
    document.getElementById("btnNo").onclick = () => responder(pregunta.no);
}

function responder(opcion) {
    alma.responder({ pureza: opcion.pureza });

    if (opcion.next) {
        mostrarPregunta(opcion.next);
    } else {
        mostrarFinal();
    }
}

