const names =document.getElementById("name")
const btnNames = document.querySelector("#btn-name")
const preguntaEl = document.getElementById("question");
const opcionesEl = document.getElementById("option");
const purezaEl = document.getElementById("purity");
const mensajeAnubisEl = document.getElementById("messages-anubis");

let juego=null


//esta clase se encarga de contener las preguntas que hara anubis
preguntas = [
  new Pregunta("¿Mentiste para salvar a alguien?", [
    { texto: "Sí", impacto: { pureza: +5 } },
    { texto: "No", impacto: { pureza: -5 } }
  ]),
  new Pregunta("¿Robaste por necesidad?", [
    { texto: "Sí", impacto: { pureza: +10 } },
    { texto: "No", impacto: { pureza: -10 } }
  ]),
new Pregunta("¿Robaste comida porque tenías hambre?", [
  { texto: "Sí", impacto: { pureza: +3 } },
  { texto: "No", impacto: { pureza: -3 } }
]),

new Pregunta("¿Traicionaste a alguien por beneficio propio?", [
  { texto: "Sí", impacto: { pureza: -8 } },
  { texto: "No", impacto: { pureza: +5 } }
]),

new Pregunta("¿Ayudaste a alguien sin esperar nada a cambio?", [
  { texto: "Sí", impacto: { pureza: +8 } },
  { texto: "No", impacto: { pureza: -4 } }
]),

new Pregunta("¿Mentiste para evitar un castigo?", [
  { texto: "Sí", impacto: { pureza: -6 } },
  { texto: "No", impacto: { pureza: +4 } }
]),

new Pregunta("¿Defendiste a alguien injustamente acusado?", [
  { texto: "Sí", impacto: { pureza: +7 } },
  { texto: "No", impacto: { pureza: -5 } }
]),

new Pregunta("¿Ignoraste a alguien que pedía ayuda?", [
  { texto: "Sí", impacto: { pureza: -7 } },
  { texto: "No", impacto: { pureza: +6 } }
]),

new Pregunta("¿Guardaste un secreto que dañaba a otros?", [
  { texto: "Sí", impacto: { pureza: -6 } },
  { texto: "No", impacto: { pureza: +5 } }
]),

new Pregunta("¿Perdonaste a alguien que te hizo daño?", [
  { texto: "Sí", impacto: { pureza: +9 } },
  { texto: "No", impacto: { pureza: -4 } }
]),

new Pregunta("¿Usaste a alguien para lograr tus objetivos?", [
  { texto: "Sí", impacto: { pureza: -9 } },
  { texto: "No", impacto: { pureza: +5 } }
]),

new Pregunta("¿Dijiste la verdad aunque te perjudicara?", [
  { texto: "Sí", impacto: { pureza: +8 } },
  { texto: "No", impacto: { pureza: -6 } }
]),

new Pregunta("¿Te aprovechaste de la debilidad de alguien?", [
  { texto: "Sí", impacto: { pureza: -10 } },
  { texto: "No", impacto: { pureza: +6 } }
]),

new Pregunta("¿Compartiste lo poco que tenías con alguien más?", [
  { texto: "Sí", impacto: { pureza: +7 } },
  { texto: "No", impacto: { pureza: -3 } }
]),

new Pregunta("¿Culpaste a otro por un error que cometiste?", [
  { texto: "Sí", impacto: { pureza: -8 } },
  { texto: "No", impacto: { pureza: +6 } }
]),

new Pregunta("¿Ayudaste a alguien que no te caía bien?", [
  { texto: "Sí", impacto: { pureza: +6 } },
  { texto: "No", impacto: { pureza: -4 } }
]),

new Pregunta("¿Obedeciste una orden injusta?", [
  { texto: "Sí", impacto: { pureza: -7 } },
  { texto: "No", impacto: { pureza: +7 } }
]),

new Pregunta("¿Protegiste a un inocente aun con riesgo personal?", [
  { texto: "Sí", impacto: { pureza: +10 } },
  { texto: "No", impacto: { pureza: -6 } }
]),

new Pregunta("¿Mentiste para evitar que alguien sufriera?", [
  { texto: "Sí", impacto: { pureza: +4 } },
  { texto: "No", impacto: { pureza: -2 } }
]),

new Pregunta("¿Abandonaste a alguien cuando más te necesitaba?", [
  { texto: "Sí", impacto: { pureza: -9 } },
  { texto: "No", impacto: { pureza: +7 } }
]),

new Pregunta("¿Mostraste compasión por tu enemigo?", [
  { texto: "Sí", impacto: { pureza: +8 } },
  { texto: "No", impacto: { pureza: -5 } }
]),

new Pregunta("¿Elegiste el camino fácil en lugar del correcto?", [
  { texto: "Sí", impacto: { pureza: -6 } },
  { texto: "No", impacto: { pureza: +6 } }
]),

new Pregunta("¿Castigaste a alguien para dar un ejemplo?", [
  { texto: "Sí", impacto: { pureza: -4 } },
  { texto: "No", impacto: { pureza: +3 } }
]),

new Pregunta("¿Ocultaste la verdad para proteger tu reputación?", [
  { texto: "Sí", impacto: { pureza: -6 } },
  { texto: "No", impacto: { pureza: +5 } }
]),

new Pregunta("¿Ayudaste a alguien sabiendo que te traería problemas?", [
  { texto: "Sí", impacto: { pureza: +9 } },
  { texto: "No", impacto: { pureza: -5 } }
]),

new Pregunta("¿Juzgaste a alguien sin conocer su historia?", [
  { texto: "Sí", impacto: { pureza: -7 } },
  { texto: "No", impacto: { pureza: +4 } }
]),

new Pregunta("¿Usaste la violencia creyendo que era necesaria?", [
  { texto: "Sí", impacto: { pureza: -6 } },
  { texto: "No", impacto: { pureza: +5 } }
]),

new Pregunta("¿Guardaste silencio ante una injusticia?", [
  { texto: "Sí", impacto: { pureza: -8 } },
  { texto: "No", impacto: { pureza: +7 } }
]),

new Pregunta("¿Sacrificaste a uno para salvar a muchos?", [
  { texto: "Sí", impacto: { pureza: -3 } },
  { texto: "No", impacto: { pureza: +2 } }
]),

new Pregunta("¿Te atribuiste el mérito del trabajo de otro?", [
  { texto: "Sí", impacto: { pureza: -9 } },
  { texto: "No", impacto: { pureza: +6 } }
]),

new Pregunta("¿Perdonaste aunque no recibiste disculpas?", [
  { texto: "Sí", impacto: { pureza: +8 } },
  { texto: "No", impacto: { pureza: -4 } }
]),

new Pregunta("¿Mentiste para evitar un conflicto mayor?", [
  { texto: "Sí", impacto: { pureza: +2 } },
  { texto: "No", impacto: { pureza: -3 } }
]),

new Pregunta("¿Elegiste salvarte a ti antes que a otros?", [
  { texto: "Sí", impacto: { pureza: -7 } },
  { texto: "No", impacto: { pureza: +8 } }
]),

new Pregunta("¿Manipulaste a alguien para que tomara una decisión?", [
  { texto: "Sí", impacto: { pureza: -8 } },
  { texto: "No", impacto: { pureza: +5 } }
]),

new Pregunta("¿Ayudaste a un culpable por compasión?", [
  { texto: "Sí", impacto: { pureza: -2 } },
  { texto: "No", impacto: { pureza: +3 } }
]),

new Pregunta("¿Preferiste obedecer órdenes en lugar de hacer lo correcto?", [
  { texto: "Sí", impacto: { pureza: -6 } },
  { texto: "No", impacto: { pureza: +7 } }
]),

new Pregunta("¿Mentiste para proteger a tu familia?", [
  { texto: "Sí", impacto: { pureza: +3 } },
  { texto: "No", impacto: { pureza: -2 } }
]),

new Pregunta("¿Rechazaste ayudar porque no era tu problema?", [
  { texto: "Sí", impacto: { pureza: -6 } },
  { texto: "No", impacto: { pureza: +5 } }
]),

new Pregunta("¿Te aprovechaste de una situación caótica?", [
  { texto: "Sí", impacto: { pureza: -9 } },
  { texto: "No", impacto: { pureza: +6 } }
]),

new Pregunta("¿Dudaste en hacer el bien por miedo?", [
  { texto: "Sí", impacto: { pureza: -4 } },
  { texto: "No", impacto: { pureza: +5 } }
]),

new Pregunta("¿Revelaste un secreto para evitar un daño mayor?", [
  { texto: "Sí", impacto: { pureza: +4 } },
  { texto: "No", impacto: { pureza: -5 } }
]),

new Pregunta("¿Dejaste que castigaran a otro por tu culpa?", [
  { texto: "Sí", impacto: { pureza: -10 } },
  { texto: "No", impacto: { pureza: +7 } }
]),

new Pregunta("¿Elegiste la venganza en lugar del perdón?", [
  { texto: "Sí", impacto: { pureza: -8 } },
  { texto: "No", impacto: { pureza: +8 } }
]),

new Pregunta("¿Mostraste misericordia cuando todos pedían castigo?", [
  { texto: "Sí", impacto: { pureza: +9 } },
  { texto: "No", impacto: { pureza: -6 } }
]),

new Pregunta("¿Hiciste lo correcto aunque nadie lo supiera?", [
  { texto: "Sí", impacto: { pureza: +10 } },
  { texto: "No", impacto: { pureza: -5 } }
]),

new Pregunta("¿Callaste una verdad que podía destruir a alguien?", [
  { texto: "Sí", impacto: { pureza: +1 } },
  { texto: "No", impacto: { pureza: -2 } }
]),

new Pregunta("¿Juzgaste sin escuchar ambas partes?", [
  { texto: "Sí", impacto: { pureza: -7 } },
  { texto: "No", impacto: { pureza: +6 } }
]),

new Pregunta("¿Ayudaste solo cuando te convenía?", [
  { texto: "Sí", impacto: { pureza: -6 } },
  { texto: "No", impacto: { pureza: +5 } }
]),

new Pregunta("¿Elegiste el silencio para mantener la paz?", [
  { texto: "Sí", impacto: { pureza: +2 } },
  { texto: "No", impacto: { pureza: -2 } }
]),

new Pregunta("¿Actuaste por miedo en lugar de por convicción?", [
  { texto: "Sí", impacto: { pureza: -5 } },
  { texto: "No", impacto: { pureza: +5 } }
]),

new Pregunta("¿Te arrepentiste pero nunca lo admitiste?", [
  { texto: "Sí", impacto: { pureza: -3 } },
  { texto: "No", impacto: { pureza: +4 } }
]),

new Pregunta("¿Elegiste la justicia aun cuando dolía?", [
  { texto: "Sí", impacto: { pureza: +9 } },
  { texto: "No", impacto: { pureza: -6 } }
]),

];
btnNames.addEventListener("click", () => {
  const nombreLimpio = names.value.trim();
  if(nombreLimpio === ""){
    alert("Ingresa un nombre")
    return 
  }
  const alma = new Alma(nombreLimpio)
  juego = new Juego(alma, preguntas);
  btnNames.style.display = "none"
  names.style.display = "none"
  renderizarPreambulo();
  
})
function renderizarPreambulo(){
  const preambulo = juego.preambulo()
  if(preambulo){
    mensajeAnubisEl.innerHTML = `${preambulo}`;
    opcionesEl.innerHTML = "";
    const btn = document.createElement("button")
      btn.textContent = "continue"
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
      preguntaEl.textContent = juego.finalizar();
      mensajeAnubisEl.innerHTML = ""
      opcionesEl.innerHTML =""

      setTimeout(() => {
    window.location.href = "../index.html";
  }, 6000);
    }
  }