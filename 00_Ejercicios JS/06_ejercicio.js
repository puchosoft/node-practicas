// Intercambio de valores 
// a.  Declara dos variables con valores distintos. 
// b.  Intercambia sus valores utilizando una variable auxiliar.
// c.  Muestra los valores intercambiados.

a = 45;
b = 78;
console.log("Antes del intercambio:");
console.log("a: " + a + " b: " + b);

aux = a;
a = b;
b = aux;
console.log("Luego del intercambio:");
console.log("a: " + a + " b: " + b);
