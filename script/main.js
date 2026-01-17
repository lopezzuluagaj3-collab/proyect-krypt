juego.iniciar();
actualizarUI();


// main.js
import { Alma } from "./alma.js";
import { preguntas } from "./pregunta.js";

const alma = new Alma("Primera Alma");

const historia = [
    "Has llegado ante el juez eterno.",
    "Tu vida fue observada con atención.",
    "Ahora debes responder por tus actos."
];

let indiceHistoria = 0;
let preguntaActual = "ronda1";

const contenedor = document.getElementById("contenedorDePreguntas");

/* TEXTO INICIAL */
contenedor.innerHTML = `
    <p>El juez te observa en silencio.<br>
    Haz click para comenzar tu juicio…</p>
    <small>Pureza del alma: ${alma.pureza}</small>
`;

/* CLICK PARA AVANZAR HISTORIA */
contenedor.addEventListener("click", avanzarHistoria);

function avanzarHistoria() {
    if (indiceHistoria < historia.length) {
        contenedor.innerHTML = `
        <p>${historia[indiceHistoria]}</p>
        <small>Pureza del alma: ${alma.pureza}</small>
    `;
        indiceHistoria++;
    } else {
        contenedor.removeEventListener("click", avanzarHistoria);
        mostrarPregunta(preguntaActual);
    }
}

/* MOSTRAR PREGUNTAS */
function mostrarPregunta(id) {
    const pregunta = preguntas[id];

    contenedor.innerHTML = `
    <p>${pregunta.texto}</p>
    <div class="btn-group-vertical">
        <button id="btnYes" class="btn btn-success">Sí</button>
        <button id="btnNo" class="btn btn-danger">No</button>
    </div>
    <small>Pureza del alma: ${alma.pureza}</small>
    `;

    document.getElementById("btnYes").onclick = () => responder(pregunta.yes);
    document.getElementById("btnNo").onclick = () => responder(pregunta.no);
}

/* RESPONDER */
function responder(opcion) {
    alma.responder({ pureza: opcion.pureza });

    if (opcion.next) {
        mostrarPregunta(opcion.next);
    } else {
        mostrarFinal();
    }
}

/* FINAL */
function mostrarFinal() {
    contenedor.innerHTML = `
    <h3>Juicio Final</h3>
    <p>Pureza: ${alma.pureza}</p>
    <p>Virtudes: ${alma.virtudes}</p>
    <p>Pecados: ${alma.pecados}</p>
    <p>Destino: <strong>${alma.evaluarDestino()}</strong></p>
    `;
}


