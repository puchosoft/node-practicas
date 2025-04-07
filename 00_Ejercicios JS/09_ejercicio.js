// Eliminar los números negativos de un array 
// a.  Declara un array con números positivos y negativos. 
// b.  Genera un nuevo array sin los valores negativos. 
// c.  Muestra el resultado.

let arrayNumeros = [1, -2, 3, -4, 5, -6, 7, -8, 9, -10];
let arrayNumerosPositivos = [];

for (let i = 0; i < arrayNumeros.length; i++) {
    if (arrayNumeros[i] >= 0) {
        arrayNumerosPositivos.push(arrayNumeros[i]);
    }
}

console.log('Arreglo completo: ', arrayNumeros); // [-2, -4, -6, -8, -10]
console.log('Arreglo de nºs positivos:', arrayNumerosPositivos); // [1, 3, 5, 7, 9]
