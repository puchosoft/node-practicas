// Suma de dos números 
// a.  Declara un array con dos números. 
// b.  Calcula la suma de ambos y guárdala en una variable. 
// c.  Muestra el resultado en consola.

const num = [7, 35];

let suma = 0;
for (let i = 0; i < num.length; i++) {
    suma += num[i];
}

console.log(suma);
