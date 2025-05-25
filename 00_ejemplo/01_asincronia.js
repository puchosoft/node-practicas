
const tareaAsinc = (tarea) => {
    setTimeout(
        () => {
            console.log('Tarea asíncrona completada.');
            tarea();
        },
        3000
    );
};

console.log('Inicio de la tarea.');

tareaAsinc(() => {
    console.log('Fin de la tarea.');
});
