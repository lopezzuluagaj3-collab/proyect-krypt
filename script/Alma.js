class Alma {
  constructor(nombre) {
    this.nombre = nombre;
    this.pureza = 50;
    this.pecados = 0;
    this.virtudes = 0;
    this.estado = "juzgando";
    setTimeout(() => this.Judge(), 10);
  }

  aumentarPureza(valor) {
    this.pureza = Math.min(100, this.pureza + valor);
    this.virtudes++;
    this.Judge();
  }

  disminuirPureza(valor) {
    this.pureza = Math.max(0, this.pureza - valor);
    this.pecados++;
    this.Judge();
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
    else this.estado = "condenada";

    return this.estado;
  }

  Judge(){
    const arm = document.getElementById("armWrapper");
    const hL = document.getElementById("leftHanger");
    const hR = document.getElementById("rightHanger");

    const l = this.pureza;
    const r = 100 - this.pureza;

    const dif = l - r;
    const angle = dif * 0.2;

    arm.style.transform = `rotate(${-angle}deg)`;
    hL.style.transform = `rotate(${angle}deg)`;
    hR.style.transform = `rotate(${angle}deg)`;
  }
}

////////