console.log("Anubis:", Anubis);
class Juego {
  constructor(alma, preguntas) {
    this.alma = alma;
    this.anubis = new Anubis();
    this.preguntas = preguntas;
    this.preguntasUsadas = [];
    this.preguntaActual = null;
  }

  iniciar() {
    console.log(this.anubis.hablar("El juicio ha comenzado."));
    this.siguientePregunta();
  }

  siguientePregunta() {
    if (this.preguntas.length === 0) {
      
      this.finalizar();
      return;

    }

    const index = Math.floor(Math.random() * this.preguntas.length);
    this.preguntaActual = this.preguntas.splice(index, 1)[0];
    this.preguntasUsadas.push(this.preguntaActual);
  }

  responder(indiceOpcion) {
    const impacto = this.preguntaActual.obtenerImpacto(indiceOpcion);
    this.alma.responder(impacto);
    this.siguientePregunta();
  }

  finalizar() {
    console.log(this.anubis.juzgar(this.alma));
  }
}
