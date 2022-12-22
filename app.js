//se importan los archivos
const {crearArchivo} = require('./helpers/multiplicar')
const argv=require('./config/yargs')
console.clear();

//process.arg devuelve por default la base donde se esta ejecutando node y devuelve el path donde esta la aplicación 
//adicionalmente podemos enviar parámetros ejemplo --base=9 donde este parámetro ocupa el tercer lugar en posición para acceder a el
/* const [,,arg3='base=5'] = process.argv;
console.log(process.argv);
const [,base=5]=arg3.split('=')
console.log(base); */
console.log('base:yargs',argv.base);

crearArchivo(argv.b,argv.l,argv.h).then(nombreArcivo=> console.log(nombreArcivo)).catch(err=> console.log(err));


