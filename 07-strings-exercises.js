/*
Clase 22 - Ejercicios: Strings
Vídeo: https://youtu.be/1glVfFxj8a4?t=7226
*/

// 1. Concatena dos cadenas de texto
let miNombre = "Alberto"
 let saludo = "Hola"
 console.log(saludo + " " + miNombre);


// 2. Muestra la longitud de una cadena de texto
let texto = "Hola Mundo"
console.log(texto.length);

// 3. Muestra el primer y último carácter de un string
 let palabra = "Hola"
console.log(palabra[0]);
console.log(palabra[palabra.length - 1]);

// 4. Convierte a mayúsculas y minúsculas un string
console.log(palabra.toUpperCase());
console.log(palabra.toLowerCase());

// 5. Crea una cadena de texto en varias líneas
let apellido = "Cabrera"
let nombreCompleto = "Ricardo"
let edad = 30
console.log(`Mi nombre es ${nombreCompleto} ${apellido} y tengo ${edad} años`)


// 6. Interpola el valor de una variable en un string
let nombre = "Alberto"
let edad2 = 30
console.log(`Mi nombre es ${nombre} y tengo ${edad2} años`)


// 7. Reemplaza todos los espacios en blanco de un string por guiones
let texto2 = "Hola Mundo"
console.log(texto2.replace(" ", "-"));


// 8. Comprueba si una cadena de texto contiene una palabra concreta
let texto3 = "Hola Mundo"
console.log(texto3.includes("arriba"));

// 9. Comprueba si dos strings son iguales
let texto4 = "Hola Mundo"
let texto5 = "Hola Mundo"
console.log(texto4 === texto5);

// 10. Comprueba si dos strings tienen la misma longitud
let texto6 = "Hola Mundo"
let texto7 = "Hola Mundo"
console.log(texto6.length === texto7.length);
