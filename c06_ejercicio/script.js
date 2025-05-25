var personajes1 = "Falló la consulta a la API";

const resultado1 = fetch('https://rickandmortyapi.com/api/character')

resultado1
    .then(response => response.json())
    .then(data => {
        personajes1 = data.results.slice(0, 5);    
    })
    .catch(error => console.error('Error:', error))
    .finally(() => {
        console.log("\n");
        console.log("Mision 1: Mostrar 5 personajes de la API de Rick and Morty (then/catch/finally)");
        console.log("-------------------------------------------------------------------------------");
        console.log(personajes1);
    });


async function mostrar5Personajes() {
    try {
        const resultado2 = await fetch('https://rickandmortyapi.com/api/character');
        var data = await resultado2.json();
        var personajes2 = data.results.slice(0, 5);
    } catch(error) {
        console.error('Error:', error);
        personajes2 = "Falló la consulta a la API";
    } finally{
        console.log("\n");
        console.log("Mision 2: Mostrar 5 personajes de la API de Rick and Morty (sync/await)");
        console.log("-----------------------------------------------------------------------");
        console.log(personajes2);
    }
}


mostrar5Personajes();
