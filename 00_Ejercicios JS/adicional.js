// El siguiente código intenta calcular la suma de los elementos de un array, pero el 
// resultado es incorrecto.

let numeros = [2, 4, 6, 8]; 
let suma = 0; 

// for (let i = 1; i < numeros.length; i++) { # Recorre el array en forma incompleta
for (let i = 0; i < numeros.length; i++) { 
   suma += numeros[i]; 
} 
 
console.log("Suma:", suma); // Debería mostrar 20 
