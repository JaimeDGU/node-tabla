const fs = require('fs');
const colors = require('colors');


const x = colors.green('x');
const igual = colors.red('=');

const crearArchivoTabla = async (base = 5, l = false, h = 10) => {
 
    try {
              
        let salida = '';
        let consola = '';

        if(l) {

            console.log('=============================='.cyan);
            console.log(`         TABLA DEL ${colors.yellow(base)}`);
            console.log('=============================='.cyan);
        }
    
    
        for (let i = 1; i <= h; i++) {
    
            salida += (`${base} x ${i} = ${base * i}\n`);
            consola += (`${base} ${x} ${i} ${igual} ${base * i}\n`);
        };

        if(l) {
            
            console.log(consola);
        }
    
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
    
        return (`tabla-${base}.txt creada`);
    } catch (error) {
        
        throw error;
    }
        
};


module.exports = {
    crearArchivoTabla,
}