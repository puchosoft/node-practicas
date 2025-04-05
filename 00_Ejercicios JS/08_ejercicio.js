// Tabla de multiplicar de un número 
// a.  Declara una variable con un número. 
// b.  Genera un array con su tabla de multiplicar del 1 al 10.

let num = 7;
const tabla = [];

for (i = 1; i <= 10; i++) {
    tabla.push(num * i);
    }

    console.log(`La tabla de multiplicar del ${num} es: `);
    console.table(tabla);
    