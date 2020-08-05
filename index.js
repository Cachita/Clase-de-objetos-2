// Un restaurante quiere tener un sistema que guarde los datos de una reserva.

// El sistema debe:

// Un objeto que tenga la estructura de los datos a pedir:
// Nombre
// Apellido
// Edad
// Metodo que retorne los nombres completos y su edad.
// Un array donde se va a guardar los objetos de personas.
// Preguntar cuantas personas son.
// Dentro del ciclo ir pidiendo los datos y guardar los datos en el array.
// Luego de haber pedido todos los datos, un ciclo que llame al método y lo imprima en pantalla.

let pregunta = prompt("Hola, sean todos bienvenidos al restaurante Q'le arepa.");

const cliente = {
  nombre: '',
  apellido: '',
  edad: 0,
  };
  const x = [];
  
  for (let index = 0; index <= pregunta; index++) {
      cliente.nombre = prompt(`Escribe tu nombre (solo nombre) ${index}`);
      cliente.apellido = prompt(`Escribe tu apellido ${index}`);
      cliente.edad = parseInt(prompt(`Escribe tu edad ${index}`));

  }