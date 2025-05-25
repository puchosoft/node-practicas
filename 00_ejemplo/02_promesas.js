
const tareaAsinc = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.5) {
                resolve('Tarea asincronica completada.');
            } else {
                reject(new Error('Tarea asincronica fallida.'));
            }
        }, 3000);
    });
}

console.log('Inicio de la tarea.');

tareaAsinc()
    .then((resultado) => console.log(resultado))
    .catch((error) => console.error(error))
    .finally(() => console.log('Fin de la tarea.'));
