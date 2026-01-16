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

    if (destino === "dudosa") {
      return this.hablar("La balanza duda… tu alma no es pura ni corrupta.");
    }

    return this.hablar("Tu corazón pesa demasiado. Ammut te espera.");
  }
}
