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
  console.log("Juego creado:", juego);
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
        // 1️⃣ Capturar impacto antes de cambiar de pregunta
        const impacto = juego.preguntaActual.obtenerImpacto(index);

        // 2️⃣ Aplicar respuesta al juego
        juego.responder(index);

        // 3️⃣ Reacción inmediata de Anubis
        mensajeAnubisEl.textContent = juego.anubis.reaccionar(impacto);
        setTimeout(() => {
          mensajeAnubisEl.textContent = "";
        }, 2000);
        // 4️⃣ Actualizar interfaz
        actualizarUI();
      });

      opcionesEl.appendChild(btn);
    });
  }

function actualizarUI() {
  if(!juego) return
    purezaEl.textContent = juego.alma.pureza

    if (juego.preguntaActual) {
      renderizarPregunta(juego.preguntaActual)
    }else {
      mensajeAnubisEl.textContent = juego.finalizar();
      preguntaEl.textContent = ""
      opcionesEl.innerHTML =""

      setTimeout(() => {
    window.location.href = "../index.html";
  }, 6000);
    }
  }
