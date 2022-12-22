
//se añade las librerias requeridas
const fs = require('fs')
const colors = require('colors');
const crearArchivo = async (base=5,listar,hasta)=>{
 try {
if(listar){
console.log('======================'.green);
console.log(colors.rainbow( 'Tabla del: '),colors.blue(base));
console.log('======================'.green);
}
    let salida = '';
    for (let i = 0; i <= hasta; i++) {
        salida+=(`${base} * ${i} = ${i*5} \n`);
        console.log(colors.blue(base),colors.rainbow(('X '+ i + ' = ' + (i*5))));
    }
    
    fs.writeFileSync(`salida/tabla-${base}.txt`,salida);
    if(listar)
   
    return (`tabla del ${base}  creada`);
 } catch (error) {
    throw error;
 }

}

//exportar las funciones de este archivo
module.exports = {
    crearArchivo
}