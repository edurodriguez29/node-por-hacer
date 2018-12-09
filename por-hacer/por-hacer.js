const fs = require('fs');

let listadoPorHacer = [];

const guardarDB = () => {

    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('./DB/data.json', data, (err) => {
        if (err) throw new error('No se pudo grabar en el archivo JSON', err);
    })
}

const cargaDB = () => {
    try {
        listadoPorHacer = require('../DB/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }

}
const crear = (descripcion) => {

    cargaDB();

    let porHacer = {
        descripcion: descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);
    guardarDB();
    return porHacer;
}

const getListado = () => {
    cargaDB();
    return listadoPorHacer;
}

const actualizar = (descripcion, estado = true) => {
    cargaDB();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);

    // console.log(`index: ${index} estado:${estado}`);

    if (index >= 0) {
        listadoPorHacer[index].completado = estado;
        guardarDB();
        return true;
    } else {
        false;
    }
}

const borrar = (descripcion) => {
    cargaDB();
    let nuevoListado = listadoPorHacer.filter(tarea => tarea.descripcion !== descripcion);

    //=== exactamente igual
    if (nuevoListado.length === listadoPorHacer.length) {
        return false;
    } else {
        listadoPorHacer = nuevoListado;
        guardarDB();
        return true;
    };
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}