/*
Clase 28 - Ejercicios: Estructuras
Vídeo: https://youtu.be/1glVfFxj8a4?t=11451
*/

// 1. Crea un array que almacene cinco animales
let arrayAnimals = ["dog", "cat", "bird", "fish", "turtle"]
console.log(arrayAnimals);

// 2. Añade dos más. Uno al principio y otro al final
arrayAnimals.unshift("rabbit")
arrayAnimals.push("hamster")
console.log(arrayAnimals);

// 3. Elimina el que se encuentra en tercera posición
arrayAnimals.splice(2, 1)
console.log(arrayAnimals);
// 4. Crea un set que almacene cinco libros
let setBooks = new Set(["book1", "book2", "book3", "book4", "book5"])
console.log(setBooks);
// 5. Añade dos más. Uno de ellos repetido
setBooks.add("book6")
setBooks.add("book6")
console.log(setBooks);
// 6. Elimina uno concreto a tu elección
setBooks.delete("book2")
console.log(setBooks);
// 7. Crea un mapa que asocie el número del mes a su nombre
let mapMonths = new Map([
    [1, "January"],
    [2, "February"],
    [3, "March"],
    [4, "April"],
    [5, "May"],
    [6, "June"],
    [7, "July"],
    [8, "August"],
    [9, "September"],
    [10, "October"],
    [11, "November"],
    [12, "December"]
])
console.log(mapMonths);
// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
mapMonths.has(5)
console.log(mapMonths.get(5));
// 9. Añade al mapa una clave con un array que almacene los meses de verano
mapMonths.set("summer", ["June", "July", "August"])
console.log(mapMonths);
// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map
let array = ["one", "two", "three"]
let set = new Set(array)
let map = new Map([["numbers", set]])
console.log(map);