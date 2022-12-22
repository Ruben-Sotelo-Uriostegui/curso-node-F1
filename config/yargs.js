
//configuración de yargs
const argv=require('yargs')
.option('b',{
    alias:'base',
    type:'number',
    demandOption:true,
    describe:'es la base de la tabla generada'
})
.option('l',{
alias:'listar',
type:'boolean',
default:false,
describe:'mostrar la tabla generada'
})
.option('h',{
    alias:'hasta',
    type:'number',
    default:10,
    describe:'hasta que numero se va a multiplicar'
    })
.check((argv,options)=>{
    if(isNaN(argv.b)){
        throw 'la base tiene que ser un numero'
    }else if(isNaN(argv.h) || argv.h<=0){
        throw 'el hasta tiene que ser un numero mayor a 0'
    }
    return true;
})
.argv;
//exportamos el objeto argv 'configuracion de nuestras banderas'
module.exports= argv;

