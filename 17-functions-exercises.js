/*
Clase 32 - Ejercicios: Funciones
Vídeo: https://youtu.be/1glVfFxj8a4?t=14146
*/

// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma
function suma(a, b) {
    return a + b
}
console.log(suma(2, 3));
// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos
function arrayMax(array) {
    return Math.max(...array)
}
console.log(arrayMax([1, 2, 3, 4, 5]));

// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene
function string(num) {
    let count = 0
    let vowels = ["a", "e", "i", "o", "u"]
    for (let i = 0; i < num.length; i++) {
        if (vowels.includes(num[i])) {
            count++
        }
    }
    return count
}
console.log(string("hello"));
// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas
function arrayStrings(array) {
    return array.map(string => string.toUpperCase())
}   
console.log(arrayStrings(["hello", "world"]));
// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario
fucntion (numero) {
    if (numero < 2) {
        return false
    }
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            return false
        }
    }
    return true
}
console.log(primo(7));

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos
function arrayCommons(array1, array2) {
    return array1.filter(value => array2.includes(value))
}
console.log(arrayCommons([1, 2, 3], [2, 3, 4]));

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares
function (arraynum) {
    return arraynum.reduce((acc, value) => value % 2 === 0 ? acc + value : acc, 0)
}
console.log(sumEven([1, 2, 3, 4, 5, 6]));

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado
function arraySquare(array) {
    return array.map(value => value ** 2)
}
console.log(arraySquare([1, 2, 3, 4, 5]));
// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso
function (cadeDeTexto) {
    return cadenaDeTexto.split(" ").reverse().join(" ")
}
console.log(reverseWords("hello world"));
// 10. Crea una función que calcule el factorial de un número dado
function factorial(n) {
    if (n === 0) {
        return 1
    }
    return n * factorial(n - 1)
}
console.log(factorial(5));