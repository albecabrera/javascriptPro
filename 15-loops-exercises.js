/*
Clase 30 - Ejercicios: Bucles
Vídeo: https://youtu.be/1glVfFxj8a4?t=12732
*/

// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20
let i = 1;
while (i <= 20) {
    console.log(i);
    i++;
}

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado
let suma = 0;
for (let i = 1; i <= 100; i++) {
    suma += i;
}
console.log(suma);
// 3. Crea un bucle que imprima todos los números pares entre 1 y 50
let a = 1;
while (a <= 50) {
    if (a % 2 === 0) {
        console.log(a);
    }
    a++;
}

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola
let nombres = ['Juan', 'Pedro', 'Luis', 'Ana', 'Maria'];
console.log(nombres);
for (let i = 0; i < nombres.length; i++) {
    console.log(nombres[i]);
}
// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto
let count = 0;
let texto = 'Hola Mundo';
console.log(texto.length);
for (let i = 0; i < texto.length; i++) {
    if (texto[i] === 'a' || texto[i] === 'e' || texto[i] === 'i' || texto[i] === 'o' || texto[i] === 'u') {
        count++;
    }
}
console.log(count);


// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto
let numeros = [1, 2, 3, 4, 5];
let producto = 1;
for (let i = 0; i < numeros.length; i++) {
    producto *= numeros[i];
}
console.log(producto);

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5
let tabla = 5;
for (let i = 1; i <= 10; i++) {
    console.log(`${tabla} x ${i} = ${tabla * i}`);
}

// 8. Usa un bucle para invertir una cadena de texto
let cadena = 'Hola Mundo';
let invertida = '';
for (let i = cadena.length - 1; i >= 0; i--) {
    invertida += cadena[i];
}
console.log(invertida);

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci
let b = 0;
let c = 1;
let d;
console.log(b);
console.log(c);
for (let i = 2; i < 10; i++) {
    d = b + c;
    console.log(d);
    b = c;
    c = d;
}
// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10
let numeros2 = [1, 20, 3, 40, 5, 60];
let mayores = [];
for (let i = 0; i < numeros2.length; i++) {
    if (numeros2[i] > 10) {
        mayores.push(numeros2[i]);
    }
}
console.log(mayores);