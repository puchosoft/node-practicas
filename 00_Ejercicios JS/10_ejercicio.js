// Contar cuántas veces aparece un número en un array 
// a.  Declara un array con varios números repetidos. 
// b.  Declara una variable con un número específico. 
// c.  Cuenta cuántas veces aparece ese número en el array.

let numeros = [1, 2, 3, 4, 5, 1, 2, 3, 1, 4, 5];
let contador = 0;

let num = 1;

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] === num) {
        contador++;
    }
}

console.log('Arreglo completo:', numeros);
console.log(`El número ${num} aparece ${contador} veces en el array.`);
