class Pregunta {
  constructor(texto, opciones) {
    this.texto = texto;
    this.opciones = opciones;
  }

  obtenerImpacto(indiceOpcion) {
    return this.opciones[indiceOpcion].impacto;
  }
}