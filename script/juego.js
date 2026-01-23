console.log("Anubis:", Anubis);
class Juego {
  constructor(alma, preguntas) {
    this.alma = alma;
    this.anubis = new Anubis();
    this.preguntas = [...preguntas];
    this.preguntasUsadas = [];
    this.preguntaActual = null;
    this.currentIndex = 0;
    this.anubisSteps = [
      `Bienvenido, alma errante de <b>${this.alma.nombre}</b>. Has llegado al Salón de las Dos Verdades.`, 
      "Entrega tu corazón. Lo pondré en el plato de la balanza.",
      "Si tu corazón es más pesado que la verdad, Ammit te espera.",
      "Silencio... La balanza se detiene.",
      "¿Estás listo?"
    ];
  }
  preambulo(){
    if(this.currentIndex < this.anubisSteps.length){
      const contenido = this.anubisSteps[this.currentIndex];
      this.currentIndex ++
      return contenido
    }
    return null;
  }
  iniciar() {
    
    console.log(this.anubis.hablar("El juicio ha comenzado."));
    this.siguientePregunta();
    actualizarUI();
  }

  siguientePregunta() {
    
    if (this.preguntasUsadas.length === 6 || this.preguntas.length === 0) {
      this.preguntaActual= null
      this.finalizar()
      return 
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
    return this.anubis.juzgar(this.alma);
  }
  
}
