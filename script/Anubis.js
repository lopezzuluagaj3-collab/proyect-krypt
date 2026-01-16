class Anubis {
  constructor() {
    this.umbral = 70;
  }

  hablar(texto) {
    return `🗣️ Anubis: ${texto}`;
  }

  juzgar(alma) {
    const destino = alma.evaluarDestino();

    if (destino === "salvada") {
      return this.hablar("Tu corazón es ligero como la pluma de Maat.");
    }
    return this.hablar("Tu corazón pesa demasiado. Ammut te espera.");
  }
}
