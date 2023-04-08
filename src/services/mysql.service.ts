//GESTIONAR CONEXIÓN A LA BASE DE DATOS

import mysql from "mysql2";
import config from "../config/config";


//Función: OBTENER CONEXIÓN
const getConnection = () => {

    //Crear constante "connection"
    const connection = mysql.createConnection({
       database: config.DATABASE,
       user: config.DB_USER,
       password: config.DB_PASSWORD,
       host: config.DB_HOST,
       port: +config.DB_PORT //Se recibe como String, pero espera un número 
    });

    //Ejecutar método "connect"
    connection.connect((error) => {
        if (error){
            throw error; //Lanza error
        }else{
            console.log("Conexión exitosa"); //Muestra mensaje: todo ok
        }
    });
    return connection;
}


//Función: EJECUTAR CONSULTA
const executeQuery = (query: string): Promise<any> => { //Va recibir la consulta como un String. La promesa puede devolver cualquier tipo de dato
    return new Promise((resolve, reject) => {
        try{
            const connection = getConnection(); //Llamar función OBTENER CONEXIÓN
            connection.query(query, (error, result) => { //Ejecutar consulta, con concepto de promesa
                if (error){
                    reject(error);
                }else{
                    resolve(result);
                }
            });
            connection.end(); //Cerrar conexión
        }catch(error){
            console.log(error);
            reject(error);
        }
    })
}



//Exportar la función "executeQuery" para ser utilizada en las funciones del CRUD
export default executeQuery; //Export por defecto
