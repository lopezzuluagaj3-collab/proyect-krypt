class Pregunta {
  constructor(texto, opciones) {
    this.texto = texto;
    this.opciones = opciones;
  }

  obtenerImpacto(indiceOpcion) {
    return this.opciones[indiceOpcion].impacto;
  }
}

// pregunta.js
export const preguntas = {
  ronda1: {
    texto: "¿Te arrepientes de tus actos?",
    yes: { pureza: +10, next: "ronda2_arrepentido" },
    no:  { pureza: -10, next: "ronda2_soberbio" }
  },

  ronda2_arrepentido: {
    texto: "¿Intentaste reparar el daño que causaste?",
    yes: { pureza: +10, next: "ronda3_redencion" },
    no:  { pureza: -5,  next: "ronda3_duda" }
  },

  ronda2_soberbio: {
    texto: "¿Crees que tus actos estaban justificados?",
    yes: { pureza: -10, next: "ronda3_condena" },
    no:  { pureza: +5,  next: "ronda3_duda" }
  },

  ronda3_redencion: {
    texto: "¿Aceptarías sacrificarte por otros?",
    yes: { pureza: +15, next: null },
    no:  { pureza: -5,  next: null }
  },

  ronda3_duda: {
    texto: "¿Crees que mereces una segunda oportunidad?",
    yes: { pureza: +5, next: null },
    no:  { pureza: -5, next: null }
  },

  ronda3_condena: {
    texto: "¿Repetirías tus actos si pudieras?",
    yes: { pureza: -15, next: null },
    no:  { pureza: +5,  next: null }
  }
};
