const names =document.getElementById("name")
const btnNames =document.getElementById("btn-name")
const preguntaEl = document.getElementById("question");
const opcionesEl = document.getElementById("option");
const purezaEl = document.getElementById("purity");
const mensajeAnubisEl = document.getElementById("messages-anubis");

let juego=null

const preguntas = [
  new Pregunta("¿Mentiste para salvar a alguien?", [
    { texto: "Sí", impacto: { pureza: +5 } },
    { texto: "No", impacto: { pureza: -5 } }
  ]),
  new Pregunta("¿Robaste por necesidad?", [
    { texto: "Sí", impacto: { pureza: -10 } },
    { texto: "No", impacto: { pureza: +10 } }
  ]),
  new Pregunta("¿Robaste por necesidad?", [
    { texto: "Sí", impacto: { pureza: -10 } },
    { texto: "No", impacto: { pureza: +10 } }
  ]),
  new Pregunta("¿Robaste por necesidad?", [
    { texto: "Sí", impacto: { pureza: -10 } },
    { texto: "No", impacto: { pureza: +10 } }
  ]),
  new Pregunta("¿Robaste por necesidad?", [
    { texto: "Sí", impacto: { pureza: -10 } },
    { texto: "No", impacto: { pureza: +10 } }
  ]),
  new Pregunta("¿Robaste por necesidad?", [
    { texto: "Sí", impacto: { pureza: -10 } },
    { texto: "No", impacto: { pureza: +10 } }
  ]),
  new Pregunta("¿Robaste por necesidad?", [
    { texto: "Sí", impacto: { pureza: -10 } },
    { texto: "No", impacto: { pureza: +10 } }
  ]),
  new Pregunta("¿Robaste por necesidad?", [
    { texto: "Sí", impacto: { pureza: -10 } },
    { texto: "No", impacto: { pureza: +10 } }
  ])
];

btnNames.addEventListener("click", () => {
  const alma = new Alma(names.value);
  juego = new Juego(alma, preguntas);
  juego.iniciar();
  actualizarUI();
  
})


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

function actualizarUI() {
  if(!juego) {
    console.log("Juego no existe.")
    return
  } 
    purezaEl.textContent = juego.alma.pureza

    if (juego.preguntaActual) {
      renderizarPregunta(juego.preguntaActual)
    }else {
      mensajeAnubisEl.textContent = juego.anubis.juzgar(juego.alma)
      preguntaEl.textContent = ""
      opcionesEl.innerHTML =""
    }
  }
