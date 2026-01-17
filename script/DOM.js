/*const alma = new Alma("Carlos");

const preguntas = [
  new Pregunta("¿Mentiste para salvar a alguien?", [
    { texto: "Sí", impacto: { pureza: +5 } },
    { texto: "No", impacto: { pureza: -5 } }
  ]),
  new Pregunta("¿Robaste por necesidad?", [
    { texto: "Sí", impacto: { pureza: -10 } },
    { texto: "No", impacto: { pureza: +10 } }
  ])
];

const juego = new Juego(alma, preguntas);
juego.iniciar();*/

const preguntaEl = document.getElementById("question");
const opcionesEl = document.getElementById("option");
const purezaEl = document.getElementById("purity");
const mensajeAnubisEl = document.getElementById("messages-anubis");


function renderizarPregunta(pregunta) {
  preguntaEl.textContent = pregunta.texto;
  opcionesEl.innerHTML = ""; 

  pregunta.opciones.forEach((opcion, index) => {
    const btn = document.createElement("button");
    btn.textContent = opcion.texto;

    btn.addEventListener("click", () => {
      juego.responder(index);
      actualizarUI();
    });

    opcionesEl.appendChild(btn);
  });
}




const juego = new Juego(alma, preguntas)

function actualizarUI() {
  purezaEl.textContent = juego.alma.pureza

  if (juego.preguntaActual) {
    renderizarPregunta(juego.preguntaActual)
  }else {
    mensajeAnubisEl.textContent = juego.anubis.juzgar(juego.alma)
    preguntaEl.textContent = ""
    opcionesEl.innerHTML =""
  }
}

