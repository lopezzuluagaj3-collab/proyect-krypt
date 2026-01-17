class Alma {
  constructor(nombre) {
    this.nombre = nombre;
    this.pureza = 50;
    this.pecados = 0;
    this.virtudes = 0;
    this.estado = "juzgando";
  }

  aumentarPureza(valor) {
    this.pureza = Math.min(100, this.pureza + valor);
    this.virtudes++;
  }

  disminuirPureza(valor) {
    this.pureza = Math.max(0, this.pureza - valor);
    this.pecados++;
  }

  responder(impacto) {
    if (impacto.pureza > 0) {
      this.aumentarPureza(impacto.pureza);
    } else {
      this.disminuirPureza(Math.abs(impacto.pureza));
    }
  }

  evaluarDestino() {
    if (this.pureza >= 70) this.estado = "salvada";
    else if (this.pureza >= 40) this.estado = "dudosa";
    else this.estado = "condenada";

    return this.estado;
  }
}
