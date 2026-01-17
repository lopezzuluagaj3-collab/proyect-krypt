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
const purezaEl = document.getElementById("pureza");
const mensajeAnubisEl = document.getElementById("messages-anubis");