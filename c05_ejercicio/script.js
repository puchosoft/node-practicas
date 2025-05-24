
// Toma los argumentos de la línea de comandos a partir del 3er argumento
const args = process.argv.slice(2);

// El primer argumento es el comando (GET, POST, PUT, DELETE)
const comando = args[0];

switch (comando) {
    case "GET":
        console.log("Toma un dato");
        break;
    case "POST":
        if (args.length < 2) {
            console.log("Faltan argumentos para el comando POST");
            break;
        }
        var data = args[1];
        console.log(`Recibimos ${data} satisfactoriamente`);
        break;
    case "PUT":
        if (args.length < 2) {
            console.log("Faltan argumentos para el comando PUT");
            break;
        }
        var id = args[1];
        console.log(`Modificamos el item con id: ${id} satisfactoriamente`);
        break;
    case "DELETE":
        if (args.length < 2) {
            console.log("Faltan argumentos para el comando DELETE");
            break;
        }
        var id = args[1];
        console.log(`El item con el id: ${id} se eliminó con éxito`);
        break;
    default:
        console.log("Comando no reconocido");
        break;
}
