
const argv = require('yargs')
    .option('b', { 
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar'
    })
    .option('l', {
        alias: 'listar',
        type:'boolean',
        default: false,
        describe: 'muestra la base en consola'

    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe: 'Limite de multiplicaciones'
    })
    .check((argv, options) => {
        
        if(isNaN(argv.b)) {
            throw 'La base tiene que ser un numero'
        }
        if(isNaN(argv.h)) {
            throw 'Debe ser un numero';
        }
        return true;
    })
    .argv


module.exports = {
    argv,
}
