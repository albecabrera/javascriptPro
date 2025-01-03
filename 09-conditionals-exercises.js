/*
Clase 24 - Ejercicios: Condicionales
Vídeo: https://youtu.be/1glVfFxj8a4?t=8652
*/

// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor
let nombre = "Alberto"
if (nombre === "Alberto") {
    console.log(nombre);
}
// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
let usuario = "Alberto"
let contraseña = "1234"
if (usuario === "Alberto" && contraseña === "1234") {
    console.log("Usuario y contraseña correctos")}
// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
let numero = 0
if (numero > 0) {
    console.log("El número es positivo")
} else if (numero < 0) {
    console.log("El número es negativo")
} else (numero === 0); {
    console.log("El número es cero")
}
// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
let edad = 18
if (edad >= 18) {
    console.log("Puede votar")
} else if (edad < 18) {
    console.log(`No puede votar. Le faltan ${18 - edad} años`)
}   

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 
let edad2 = 18
let estado = edad2 >= 18 ? "adulto" : "menor"
console.log(estado)


// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
let mes = 8
switch (mes) {
case mes = 1;
    console.log("Invierno")
    break;
case mes = 2;    
    console.log("Invierno")
    break;
case mes = 3;
    console.log("Primavera")
    break;
case mes = 4;
    console.log("Primavera")
    break;
case mes = 5;
    console.log("Primavera")
    break;
case mes = 6;
    console.log("Verano")
    break;
case mes = 7;
    console.log("Verano")
    break;
case mes = 8;
    console.log("Verano")
    break;
case mes = 9;
    console.log("Otoño")
    break;
case mes = 10;
    console.log("Otoño")
    break;
case mes = 11;
    console.log("Otoño")
    break;
case mes = 12;
    console.log("Invierno")
    break;
default:
    console.log("Mes no válido")
    break;
}


// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior
let mes2 = 8
switch (mes2) {
    case 1:
        console.log("31 días")
        break;
    case 2:
        console.log("28 días")
        break;
    case 3:
        console.log("31 días")
        break;
    case 4:
        console.log("30 días")
        break;
    case 5:
        console.log("31 días")
        break;
    case 6:
        console.log("30 días")
        break;
    case 7:
        console.log("31 días")
        break;
    case 8:
        console.log("31 días")
        break;
    case 9:
        console.log("30 días")
        break;
    case 10:
        console.log("31 días")
        break;
    case 11:
        console.log("30 días")
        break;
    case 12:
        console.log("31 días")
        break;
    default:
        console.log("Mes no válido")
        break;
}
// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma
switch (idioma) {
    case "es":
        console.log("Hola")
        break;
    case "en":
        console.log("Hello")
        break;
    case "fr":
        console.log("Bonjour")
        break;
    default:
        console.log("Idioma no válido")
        break;
}
// 9. Usa un switch para hacer de nuevo el ejercicio 6

// 10. Usa un switch para hacer de nuevo el ejercicio 7