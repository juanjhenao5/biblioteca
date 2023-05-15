function taller1(){
  let nombre = prompt("¿Cuál es tu nombre?");
  let edad = prompt("¿Cuál es tu edad?");
  
  // Convertir la edad a un número
  edad = parseInt(edad);
  
  // Calcular la edad el próximo año
  const edadProximoAnio = edad + 1;
  
  // Mostrar el mensaje por consola usando template strings
  console.log(`Hola ${nombre}, tienes ${edad} años y el año que viene tendrás ${edadProximoAnio} años.`);
  alert(`Hola ${nombre}, tienes ${edad} años y el año que viene tendrás ${edadProximoAnio} años.`);
      
}
function taller2(){
  const figura = prompt("¿De qué figura quieres calcular el área? (triángulo, rectángulo o círculo)");

  if (figura === "triángulo") {
    let base = prompt("Ingresa la base del triángulo:");
    let altura = prompt("Ingresa la altura del triángulo:");
  
    // Convertir las variables a números
    base = parseFloat(base);
    altura = parseFloat(altura);
  
    // Calcular el área del triángulo
    let area = (base * altura) / 2;
  
    console.log(`El área del triángulo es ${area}`);
  } else if (figura === "rectángulo") {
    let base = prompt("Ingresa la base del rectángulo:");
    let altura = prompt("Ingresa la altura del rectángulo:");
  
    // Convertir las variables a números
    base = parseFloat(base);
    altura = parseFloat(altura);
  
    // Calcular el área del rectángulo
    let area = base * altura;
  
    console.log(`El área del rectángulo es ${area}`);
  } else if (figura === "círculo") {
    let radio = prompt("Ingresa el radio del círculo:");
  
    // Convertir la variable a número
    radio = parseFloat(radio);
  
    // Calcular el área del círculo
    let area = Math.PI * radio ** 2;
  
    console.log(`El área del círculo es ${area}`);
    alert(`El área del círculo es ${area}`);
  } else {
    console.log("Lo siento, no reconozco esa figura.");
    alert("Lo siento, no reconozco esa figura.");
  }
  
}
function taller3() {
  let numero = prompt("Ingresa un número:");

  // Validar que el usuario haya ingresado un número
  if (isNaN(numero)) {
    console.log("Lo siento, eso no es un número.");
    alert("Lo siento, eso no es un número.");
    return;
  }

  // Convertir la variable a número
  numero = parseInt(numero);

  // Iterar desde 1 hasta el número ingresado
  for (let i = 1; i <= numero; i++) {
    if (i % 2 === 0) {
      console.log(`${i} - es par`);
      alert(`${i} - es par`);
    } else {
      console.log(`${i} - es impar`);
      alert(`${i} - es impar`);
    }
  }
}


function taller4() {
  let numero = parseInt(prompt("Ingresa un número entero positivo mayor que 1:"));

  if (numero <= 1) {
    console.log("El número ingresado no es válido.");
  }

  let esPrimo = true;

  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
      esPrimo = false;
      break;
    }
  }

  if (esPrimo) {
    console.log(`${numero} es un número primo.`);
  } else {
    console.log(`${numero} no es un número primo.`);
  }
}


function taller5(){
  let numero = parseInt(prompt("Ingresa un número entero mayor que cero:"));

  // Verificar si el número es mayor que cero
  if (numero <= 0) {
    console.log("El número debe ser mayor que cero.");
  } else {
    let factorial = 1;
  
    // Iterar desde el número hasta 1
    for (let i = numero; i >= 1; i--) {
      factorial *= i;
    }
  
    // Mostrar el resultado
    console.log(`El factorial de ${numero} es ${factorial}.`);
    alert(`El factorial de ${numero} es ${factorial}.`);
  }
     
}
function taller6(){
  let suma = 0;
  let contador = 0;
  
  while (suma <= 50) {
    let numero = parseInt(prompt("Ingresa un número:"));
    
    if (isNaN(numero)) {
      console.log("Debes ingresar un número válido.");
      continue;
    }
  
    suma += numero;
    contador++;
  }
  
  console.log(`El total acumulado es ${suma} y se han introducido ${contador} números.`);
  alert(`El total acumulado es ${suma} y se han introducido ${contador} números.`);
}
function taller7(){
// Creamos el primer array
let numeros = [5, 9, 12, 7, 3];

// Creamos los arrays vacíos para los números pares e impares
let pares = [];
let impares = [];

// Recorremos el primer array y multiplicamos cada número por un número aleatorio entre 1 y 10
numeros.forEach(numero => {
  let aleatorio = Math.floor(Math.random() * 10) + 1; // Generamos un número aleatorio entre 1 y 10
  let resultado = numero * aleatorio; // Multiplicamos el número por el número aleatorio generado
  console.log(`${numero} x ${aleatorio} = ${resultado}`); // Mostramos la multiplicación y su resultado en la consola
  
  if (resultado % 2 === 0) { // Verificamos si el resultado es par
    pares.push(resultado); // Si es par, lo agregamos al array de pares
  } else {
    impares.push(resultado); // Si es impar, lo agregamos al array de impares
  }
});

// Mostramos los arrays de pares e impares en la consola
console.log(`Números pares: ${pares}`);
alert(`Números pares: ${pares}`);
console.log(`Números impares: ${impares}`);
alert(`Números impares: ${impares}`);
   
}
function taller8(){
  const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

  const dni = prompt("Introduce tu número de DNI:");
  const dniNumber = parseInt(dni);
  
  if (dniNumber >= 0 && dniNumber <= 99999999) {
    const letraIndex = dniNumber % 23;
    const letraDNI = letras[letraIndex];
    console.log(`La letra correspondiente a tu DNI ${dni} es: ${letraDNI}`);
    alert(`La letra correspondiente a tu DNI ${dni} es: ${letraDNI}`);
  } else {
    console.log("El número de DNI introducido no es válido.");
    alert("El número de DNI introducido no es válido.");
  }
     
}
function taller9(){
  const palabra = prompt("Introduce una palabra:");
  const longitud = palabra.length;
  
  let consonantes = 0;
  let vocales = 0;
  
  for (let i = 0; i < longitud; i++) {
    const letra = palabra.charAt(i).toLowerCase();
    if (/[aeiou]/.test(letra)) {
      vocales++;
    } else if (/[b-df-hj-np-tv-z]/.test(letra)) {
      consonantes++;
    }
  }
  
  console.log(`La palabra "${palabra}" tiene ${consonantes} consonantes, ${vocales} vocales y una longitud de ${longitud} caracteres.`);
  alert(`La palabra "${palabra}" tiene ${consonantes} consonantes, ${vocales} vocales y una longitud de ${longitud} caracteres.`); 
}
function taller10(){
  const colores = ["azul", "amarillo", "rojo", "verde", "rosa"];
  const colorUsuario = prompt("Introduce un color:");
  
  if (colores.includes(colorUsuario)) {
    console.log(`El color ${colorUsuario} se encuentra en el array.`);
    alert(`El color ${colorUsuario} se encuentra en el array.`);
  } else {
    console.log(`El color ${colorUsuario} no se encuentra en el array.`);
    alert(`El color ${colorUsuario} no se encuentra en el array.`);
  }
}
