// Mision 1
// 1) Crea un array con 10 objetos, donde cada objeto represente un automóvil con la siguiente información:
// Marca
// Modelo
// Año
// Color

// 2) Usa un método de array para recorrer la lista e imprime por consola todos los datos de
//  los automóviles cuyo año sea mayor a 2018.


class Automovil {
    constructor(marca, modelo, anio, color) {
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
        this.color = color;
    }
}


const automoviles = [];
const marcas = ["Toyota", "Ford", "Chevrolet", "Honda", "Nissan", "Volkswagen", "Hyundai", "Kia", "Mazda", "Subaru"];
const modelos = ["Corolla", "Focus", "Cruze", "Civic", "Altima", "Jetta", "Elantra", "Forte", "CX-5", "Outback"];
const anios = [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024];
const colores = ["Rojo", "Azul", "Verde", "Negro", "Blanco", "Gris", "Verde", "Rojo", "Violeta", "Rojo"];

for (let i = 0; i < 10; i++) {
    automoviles.push(new Automovil(marcas[i], modelos[i], anios[i], colores[i]));
}

console.table(automoviles.filter(automovil => automovil.anio > 2018));

// Mision 2
// 1. Crea una función que recorra el array de
// automóviles.
// 
// 2. Usa destructuring dentro de la función para
// obtener el color de cada automóvil.
// 
// 3. La función debe aceptar un color como
// parámetro y devolver por consola cuántos
// automóviles tienen ese color.

function contarAutomovilesPorColor(colorAutomovil) {
    let contador = 0;
    automoviles.forEach(({ color }) => {
        if (colorAutomovil === color) {
            contador++;
        }
    });
    console.log(`Hay ${contador} automóviles de color ${colorAutomovil}.`);
}

contarAutomovilesPorColor("Rojo");
contarAutomovilesPorColor("Azul");
contarAutomovilesPorColor("Verde");
