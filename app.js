// const argv = require('yargs').argv;

const argv = require('./config/jargs.js').argv;
const porHacer = require('./por-hacer/por-hacer');
const colors = require('colors');

console.log(argv);

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        break;

    case 'listar':
        let listado = porHacer.getListado();
        for (let tarea of listado) {
            console.log('');
            console.log('#######  Tarea #######'.red);
            console.log(`Descripcion: ${tarea.descripcion} `);
            console.log(`Completado: ${tarea.completado} `.red);
            console.log('');
        }
        break;

    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        // console.log(actualizado);
        break;

    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        break;

    default:
        console.log('Comando no reconocido');
};