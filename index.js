const { crearArchivoTabla } = require('./helpers/multiplicar');
const { argv } = require('./config/yargs');
const colors = require('colors');

console.clear();


// console.log(process.argv);
// console.log(argv);

console.log(argv.base);

// let [ , , arg3 = 'base=5' ] = process.argv;
// const [ , base] = arg3.split('=');






crearArchivoTabla(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(colors.rainbow(nombreArchivo)))
    .catch(error => console.log(error));


