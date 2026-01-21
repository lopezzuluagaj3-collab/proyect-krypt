class Anubis {
  constructor() {
    this.umbral = 70;
  }

  hablar(texto) {
    return `Anubis: ${texto}`;
  }
  reaccionar(impacto) {
    if (impacto.pureza > 0) {
      return this.hablar(fraseAleatoria(ANUBIS_PUREZA_POSITIVA));
    } else {
      return this.hablar(fraseAleatoria(ANUBIS_PUREZA_NEGATIVA));
    }
  }

  juzgar(alma) {
    const destino = alma.evaluarDestino();

    if (destino === "salvada") {
      return this.hablar(`${alma.nombre} Tu corazón es ligero como la pluma de Maat.`);
    }
    return this.hablar(`${alma.nombre} Tu corazón pesa demasiado. Ammut te espera.`);
  }
}
