const names =document.getElementById("name")
const btnNames = document.querySelector("#btn-name")
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
  const nombreLimpio = names.value.trim();
  const balance = document.getElementById("judgeBalance");
  if(nombreLimpio === ""){
    alert("Ingresa un nombre")
    return 
  }
  const alma = new Alma(nombreLimpio)
  juego = new Juego(alma, preguntas);
  btnNames.style.display = "none"
  names.style.display = "none"
  balance.classList.remove("fadeIn");
  renderizarPreambulo();
})

function renderizarPreambulo(){
  const preambulo = juego.preambulo()
  if(preambulo){
    mensajeAnubisEl.innerHTML = `${preambulo}`;
    opcionesEl.innerHTML = "";
    const btn = document.createElement("button")
      btn.textContent = "continue"
      btn.classList = "btn-main";
      btn.addEventListener('click', () => {
        renderizarPreambulo();
        btn.style.display = "none"
      });

    opcionesEl.appendChild(btn);
  } else {
    preguntaEl.textContent = "Comencemos!!";
    preguntaEl.classList = "question-box"
    preguntas.innerHTML = "";
    mensajeAnubisEl.innerHTML = "";
    setTimeout(() => {
        juego.iniciar();
      }, 2000);
  }

}
function renderizarPregunta(pregunta) {
    
    preguntaEl.textContent = pregunta.texto;
    opcionesEl.innerHTML = ""; 

    pregunta.opciones.forEach((opcion, index) => {
      const btn = document.createElement("button");
      btn.textContent = opcion.texto;
      btn.classList = "btn-main";

      btn.addEventListener("click", () => {
        
        const impacto = juego.preguntaActual.obtenerImpacto(index);

        juego.responder(index);

        mensajeAnubisEl.textContent = juego.anubis.reaccionar(impacto);
        setTimeout(() => {
          mensajeAnubisEl.textContent = "";
        }, 6000);
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
      preguntaEl.style.display = "none"
      preguntaEl.textContent = ""
      opcionesEl.innerHTML =""

      setTimeout(() => {
    window.location.href = "../index.html";
  }, 6000);
    }
  }
