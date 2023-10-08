// Ejercicio 1: Utilizar una declaración if para determinar si un número es positivo o negativo.

// Escribí tu código acá abajo:

let num1 = 5;
let resultado1 = "";

if(num1 < 0){
  resultado1 = "negativo";
}

else {
  resultado1 = "positivo";
}

// Ejercicio 2: Utilizar una declaración if para determinar si un número es par o impar.

// Escribí tu código acá abajo:

let num2 = 2;
let resultado2;

if(num2%2 == 0){
  resultado2 = "par";
}

else {
  resultado2 = "impar";
}

// Ejercicio 3: Utilizar una declaración if para determinar si un número es mayor, menor o igual a otro.

// Escribí tu código acá abajo:

let num3 = 5;
let resultado3;

if(num3 > 3){
  resultado3 = "mayor";
}

else {
  resultado3 = "menor";
}


// Ejercicio 4: Utilizar una declaración if para verificar si una persona es mayor de edad (mayor o igual a 18 años).

// Escribí tu código acá abajo:

let num4 = 22;
let resultado4;

if(num4 >= 18){
  resultado4 = "mayor de edad";
}

else {
  resultado4 = "menor de edad";
}

// Ejercicio 5: Utilizar una declaración if para determinar si un número es divisible por 3 y 5 al mismo tiempo.

// Escribí tu código acá abajo:

let num5 = 15;
let resultado5;

if(num5%3 == 0 && num5%5 == 0){
  resultado5 = "divisible por 3 y 5";
}

else {
  resultado5 = "no divisible por 3 y 5";
}


// Ejercicio 6: Utilizar una declaración if para determinar si una letra es una vocal.

// Escribí tu código acá abajo:

let vocales = ["a", "e", "i", "o", "u"];
let letra = "u";
let resultado6;

if(vocales.includes(letra)){
  resultado6 = "vocal";
}

else {
  resultado6 = "consonante";
}


// Ejercicio 7: Utilizar una declaración if para determinar si una persona puede votar (mayor de 18 y ciudadano).

// Escribí tu código acá abajo:

let resultado7;
let ciudadano = true;
let edad = 24;

if(edad > 18 == true && ciudadano == true){
  resultado7 = "puede votar";
}

else {
  resultado7 = "no puede votar";
}


// Ejercicio 8: Utilizar una declaración if para determinar si un número es positivo o cero.

// Escribí tu código acá abajo:

let resultado8;
let num8 = -4;

if(num8 > 0){
  resultado8 = "positivo";
}

else if(num8 == 0) {
  resultado8 = "cero";
}

else{
  resultado8 = "negativo";
}

// Ejercicio 9: Utilizar una declaración if para determinar si un número es mayor que 10 y menor que 20.

// Escribí tu código acá abajo:

let resultado9;
let num9 = 15;

if(num9 > 10 && num9 < 20){
  resultado9 = "mayor que 10 y menor que 20";
}



// Ejercicio 10: Utilizar una declaración if para determinar si una persona puede conducir (mayor de 16 y tiene licencia).

// Escribí tu código acá abajo:

let resultado10;
let licencia = true;
let edad2 = 24;

if(edad > 16 == true && licencia == true){
  resultado10 = "puede conducir";
}

else {
  resultado10 = "no puede conducir";
}


// Exporta las variables para que estén disponibles para otros módulos
module.exports = {
  resultado1,
  resultado2,
  resultado3,
  resultado4,
  resultado5,
  resultado6,
  resultado7,
  resultado8,
  resultado9,
  resultado10,
};
