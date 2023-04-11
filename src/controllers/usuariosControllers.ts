//FUNCIONES CRUD DE LA TABLA "usuarios" DE LA BASE DE DATOS "zitate_db"

import executeQuery from "../services/mysql.service";
import { Jwt } from "jsonwebtoken";

/*
Tener en cuenta:
1. El objeto "req" es por medio del cual se recibe la información desde el FrontEnd
2. El objeto "res" es por medio del cual se envía la respuesta hacia el FrontEnd
3. Se debe tener claro el tipo de petición HTTP que se va recibir (params, body -json, headers, query)
4. Se debe tener claro el tipo de respuesta que se va enviar (JSON, status)
*/


//Función: OBTENER USUARIO
/*
Método frontend: GET
Propiedad HTTP: params -URL
Respuesta backend: JSON (mensaje, datos de BD)
*/
const obtenerUsuario = async(req, res) => {
    const{id} = req.params; //Desestructuración. Se recibe el id
    try{
        const response = await executeQuery(`SELECT * FROM usuarios WHERE id_usuario = ${id}`); //Consulta SQL. Guardo respuesta
        const data = {
            message: `${response.length} datos encontrados`,
            datos: response.length > 0 ? response[0]: null
        }
        res.json(data); //Envío un JSON
    }catch(error){
        console.log(error);
        res.status(500).send(error);
    }
    //res.send("obtenerUsuario desde usuariosControllers.ts");
}



//Función: OBTENER USUARIOS
/*
Método frontend: GET
Propiedad HTTP: ninguno
Respuesta backend: JSON (mensaje, datos de BD)
*/
const obtenerUsuarios = async(req, res) => {
    try{
        const response = await executeQuery(`SELECT * FROM usuarios`);
        const data = {
            message: `${response.length} datos encontrados`,
            datos: response.length > 0 ? response: null
        }
        res.json(data); //Envío un JSON
    }catch(error){
        console.log(error);
        res.status(500).send(error);
    }
}



//Función: ACTUALIZAR USUARIO
/*
Método frontend: PUT
Propiedad HTTP: body -Json, params -URL
Respuesta backend: JSON (message: updated / message: not found)
*/
const actualizarUsuario = async(req, res) => {
    const{nombre, apellido, telefono, email, status, password, identificacion, tipo, recuperar, rol} = req.body;
    const{id} = req.params;
    try{
        const response = await executeQuery(`UPDATE usuarios SET nombre_usuario = "${nombre.toUpperCase()}", apellido_usuario = "${apellido.toUpperCase()}", telefono_usuario = "${telefono}", email_usuario = "${email.toLowerCase()}", status_usuario = "${status}", password_usuario = "${password}", identificacion_usuario = "${identificacion}", tipoIdentificacion_usuario = "${tipo}", recuperar_password_usuario = ${recuperar}, rol_usuario = "${rol}" WHERE id_usuario = ${id}`);
        if (response.affectedRows > 0){ //SI hubo actualización
            res.send({message: 'updated'}); //Envío un JSON
        }else{
            res.status(404).json({message: 'not found'}); //Envío un JSON
        }
    }catch(error){
        console.log(error);
        res.status(500).send(error);
    }
    //res.send("actualizarUsuario desde usuariosControllers.ts");
}



//Función: ELIMINAR USUARIO
/*
Método frontend: DELETE
Propiedad HTTP: params -URL
Respuesta backend: JSON (message: deleted, id: id_usuario / message: not found, id: id_usuario)
*/
const eliminarUsuario = async(req, res) => {
    const{id} = req.params;
    try{
        const response = await executeQuery(`DELETE FROM usuarios WHERE id_usuario = ${id}`);
        if (response.affectedRows > 0){ //SI hubo eliminación
            res.send({message: 'deleted', id: id}) //Envío un JSON
        }else{
            res.status(404).json({message: 'not found', id: id}); //Envío un JSON
        }
    }catch(error){
        console.log(error);
        res.status(500).send(error);
    }
    //res.send("eliminarUsuario desde usuariosControllers.ts");
}



//Función: AGREGAR USUARIO
/*
Método frontend: POST
Propiedad HTTP: body -Json
Respuesta backend: JSON (message: correo existente / message: created, id: id_usuario)
*/
const agregarUsuario = async(req, res) => {
    const{nombre, apellido, telefono, email, status, password, identificacion, tipo, recuperar, rol} = req.body;
    try{
        const existir = await executeQuery(`SELECT * FROM usuarios WHERE email_usuario = '${email}'`) //Validar si existe el correo
        if (existir.length > 0){
            res.send({message: 'correo existente'})
        }else{
            const response = await executeQuery(`INSERT INTO usuarios (nombre_usuario, apellido_usuario, telefono_usuario, email_usuario, status_usuario, password_usuario, identificacion_usuario, tipoIdentificacion_usuario, recuperar_password_usuario, rol_usuario) VALUES ("${nombre.toUpperCase()}", "${apellido.toUpperCase()}", "${telefono}", "${email.toLowerCase()}", "${status}", "${password}", "${identificacion}", "${tipo}", ${recuperar}, "${rol}")`)
            res.send({message: 'created', id: response.insertId})
        }
    }catch(error){
        console.log(error);
        res.status(500).send(error);
    }
    //res.send("agregarUsuario desde usuariosControllers.ts");
}



//FUNCIÓN: VALIDAR USUARIO
/*
Método frontend: POST
Propiedad HTTP: body -Json
Respuesta backend: JSON (message: correct / message: incorrect / message: not found)
*/
const validarUsuario = async(req, res) => {
    const{email, password} = req.body;
    try{
        const response = await executeQuery(`SELECT * FROM usuarios WHERE email_usuario = '${email.toLowerCase()}'`);
        if (response.length > 0){ //SI encontró el registro
            if(response[0].password_usuario === password){ //Contraseña correcta
                res.send({message: 'correct'});
            }else{
                res.send({message: 'incorrect'});
            }
        }else{
            res.send({message: 'not found'});
        }
    }catch(error){
        console.log(error);
        res.status(500).send(error);
    }
    //res.send("validarUsuario desde usuariosControllers.ts");
}



//Exportar múltiples funciones para ser usadas en el archivo "usuarios.ts"
export {obtenerUsuario, obtenerUsuarios, actualizarUsuario, eliminarUsuario, agregarUsuario, validarUsuario}