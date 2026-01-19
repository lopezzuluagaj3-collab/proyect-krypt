/*function test(nombre, callback) {
  try {
    callback();
    console.log(`${nombre}`);
  } catch (error) {
    console.error(`${nombre}`);
    console.error(error.message);
  }
}

function assert(condicion, mensaje) {
  if (!condicion) {
    throw new Error(mensaje);
  }
}

test("Alma aumenta pureza correctamente", () => {
  const alma = new Alma("Test");
  alma.aumentarPureza(10);

  assert(alma.pureza === 60, "La pureza debería ser 60");
});*/