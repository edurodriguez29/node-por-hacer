const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'descripcion de la tarea por hacer'
};

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completa o pendiente la tarea'
};

const argv = require('yargs')
    .command('crear', 'crea un elemento de la lista', {
        descripcion
    })
    .command('actualizar', 'actualzia un elemento de la lista', {
        descripcion,
        completado
    })
    .command('borrar', 'borra un elemento de la lista', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}