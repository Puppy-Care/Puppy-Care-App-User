// los modelos son representacions de las entiades de la base de datos
'use strict'

var mongoose = require('mongoose');
// a traves del paquete que se trabaja la base
var Schema = mongoose.Schema;
// definir un modelo de l abase de datos   crear un objeto de tipo es quema al  guardar un objeto de tipo esquema //ya se puede agregar una //nueva colleccion en la bas dde datos 

// estos esquemas son las clases comunes 

var ChoferSchema = Schema({
    estado: String,
    cedula: String,
    nombre: String,
    apellido: String,
    image: String,
    correo: String,
    contrasena: String,
    tel_celular: String,
    tel_convencional: String,
    num_licencia: String
});

module.exports = mongoose.model('Chofer', ChoferSchema); //de esta forma al exportar se podra utilizar el 
//objeto donde se lo llame con el use strict cuando se necesite este objeto d=tendremos un objeto de tipo 
//'User' que tendra un UserSchema al cual se le llamara y se le llenara de datos