// Ejercicio 1
// 1. Creá un array con 10 números que representen los precios de los productos.
// 2. Utiliza un método de array para calcular el precio con IVA incluido para cada valor.
const precios = [123, 456, 789, 12, 345, 678, 901, 234, 567, 890];
const preciosConIVA = precios.map(precio => precio * 1.21);

// Ejercicio 2
// Ahora que tenés los valores con IVA calculados, es momento de mostrarlos como un desarrollador profesional.
// Matías te desafía a usar template literals para estructurar tu salida de esta forma:
// El precio es: ${valor}.- IVA incluido.

preciosConIVA.forEach(precio => {
  console.log(`El precio es: ${precio.toFixed(2).padStart(7,' ')}.- IVA incluido.`);
});
