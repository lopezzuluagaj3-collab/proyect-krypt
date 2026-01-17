# proyect-krypt
### Concepto del juego

Anubis evalúa el alma del jugador a través de preguntas aleatorias.
Cada respuesta afecta el peso del corazón que se va ver afectado en una balanza.


### Clase Alma

Representa al jugador.

Atributos

nombre

pureza (0–100)

pecados (contador)

virtudes (contador)

estado ("juzgando" | "salvada" | "condenada")

Métodos

responder(pregunta, opcion)

aumentarPureza(valor)

disminuirPureza(valor)

evaluarDestino()

### Clase Anubis

El juez del juego.

Atributos

umbralPureza (ej: 60)

mensaje

Métodos

juzgar(alma)

emitirVeredicto(alma)

hablar() (mensajes narrativos)

### Clase Pregunta

Cada dilema moral.

Atributos

texto

opciones (array)

impacto (objeto con efectos)

Métodos

obtenerImpacto(opcion)

esMoral()

### Clase Juego

Controla el flujo.

Atributos

alma

anubis

preguntas

preguntasUsadas

preguntaActual

Métodos

iniciar()

preguntaRandom()

siguienteTurno()

finalizar()