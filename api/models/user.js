// los modelos son representacions de las entiades de la base de datos
'use strict'

var mongoose = require('mongoose');
// a traves del paquete que se trabaja la base
var Schema = mongoose.Schema;
// definir un modelo de l abase de datos   crear un objeto de tipo es quema al  guardar un objeto de tipo esquema //ya se puede agregar una //nueva colleccion en la bas dde datos 

// estos esquemas son las clases comunes 

var UserSchema = Schema({
    cedula: String,
    nombre: String,
    apellido: String, 
    correo: String,
    contrasena: String,
    tel_celular: String,
    tel_convencional: String,
    estado: String,
    image: String,
});

module.exports = mongoose.model('User', UserSchema); //de esta forma al exportar se podra utilizar el 
//objeto donde se lo llame con el use strict cuando se necesite este objeto d=tendremos un objeto de tipo 
//'User' que tendra un UserSchema al cual se le llamara y se le llenara de datos