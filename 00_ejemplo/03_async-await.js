
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


async function ejecutarTareaAsinc() {
    console.log('Inicio de la tarea.');
    try {
        const resultado = await tareaAsinc();
        console.log(resultado);
    } catch (error) {
            console.log(error);
    } finally {
        console.log('Fin de la tarea.');
    }
}

ejecutarTareaAsinc();
