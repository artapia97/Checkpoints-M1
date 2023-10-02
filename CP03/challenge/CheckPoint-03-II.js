// Ejercicio 1: Utilizar un bucle while para imprimir los números del 1 al 5.
let resultado1 = "";
// Escribí tu código acá abajo:

let i = 1;
while(i < 6) {
  resultado1 = resultado1 + i + " ";
  i++;
}

// Ejercicio 2: Utilizar un bucle while para imprimir los números pares del 2 al 10.
let resultado2 = "";
// Escribí tu código acá abajo:

i = 2;
while(i < 12){
  resultado2 = resultado2 + i + " ";
  i = i + 2;
}

// Ejercicio 3: Utilizar un bucle while para imprimir los números impares del 1 al 9.
let resultado3 = "";
// Escribí tu código acá abajo:

i = 1;
while(i < 10){
  resultado3 = resultado3 + i + " ";
  i = i + 2;
}


// Ejercicio 4: Utilizar un bucle while para calcular la suma de los números del 1 al 5.
let suma = 0;
let num = 1;
// Escribí tu código acá abajo:

while(num < 6){
  suma = suma + num;
  num++;
}


// Ejercicio 5: Utilizar un bucle while para calcular el producto de los números del 1 al 5.
let producto = 1;
let num2 = 1;
// Escribí tu código acá abajo:

while(num2 < 6){
  producto = producto*num2;
  num2++;
}

// Ejercicio 6: Utilizar un bucle while para imprimir los elementos de un arreglo "frutas".
let frutas = ["manzana", "banana", "uva", "pera", "naranja"];
let resultado6 = "";
let index = 0;
// Escribí tu código acá abajo:

let max = frutas.length;
while(index < max) {
  resultado6 = resultado6 + frutas[index] + " ";
  index++;
}

// Ejercicio 7: Utilizar un bucle while para encontrar el índice de la primera ocurrencia de "banana" en el arreglo "frutas".
let indiceBanana = -1;
let m = 0;
// Escribí tu código acá abajo:

while(m < max) {
  if(frutas[m] == "banana"){
    indiceBanana = m;
  }
  m++;
}

// Ejercicio 8: Utilizar un bucle while para sumar los elementos de un arreglo "numeros".
let numeros = [3, 6, 9, 12, 15];
let sumaNumeros = 0;
// Escribí tu código acá abajo:

let j = 0;
let lenNumeros = numeros.length;
while(j < lenNumeros){
  sumaNumeros = sumaNumeros + numeros[j];
  j++;
}

// Ejercicio 9: Utilizar un bucle while para imprimir los números del 10 al 1 en orden descendente.
let resultado9 = "";
let num3 = 10;
// Escribí tu código acá abajo:

while(num3 > 0){
  resultado9 = resultado9 + num3 + " ";
  num3--;
}

// Ejercicio 10: Utilizar un bucle while para calcular la potencia de 2 elevado a la n, donde n es un número.
let n2 = 4; // Cambia el valor de n según lo necesites
let potencia = 1;
let exponente = 1;
// Escribí tu código acá abajo:

let k = 1;
while(k <= n2){
  potencia = potencia*2;
  k++;
}

// Exporta las variables para que estén disponibles para otros módulos
module.exports = {
  resultado1,
  resultado2,
  resultado3,
  suma,
  producto,
  resultado6,
  indiceBanana,
  sumaNumeros,
  resultado9,
  potencia,
};
