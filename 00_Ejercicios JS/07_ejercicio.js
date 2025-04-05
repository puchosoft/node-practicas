// Encontrar el número mayor en un array 
// a.  Declara un array con números. 
// b.  Recorre el array y encuentra el número más grande. 
// c.  Muestra el resultado.

const num = [5, 52, 8, 21, 3, 15];

let mayor = num[0];
for (let i = 1; i < num.length; i++) {
    if (num[i] > mayor) {
        mayor = num[i];
    }
}

console.log("El número mayor es: " + mayor);
