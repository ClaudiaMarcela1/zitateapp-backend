//FUNCIONES CRUD DE LA TABLA "negocios" DE LA BASE DE DATOS "zitate_db"

import executeQuery from "../services/mysql.service";

/*
Tener en cuenta:
1. El objeto "req" es por medio del cual se recibe la información desde el FrontEnd
2. El objeto "res" es por medio del cual se envía la respuesta hacia el FrontEnd
3. Se debe tener claro el tipo de petición HTTP que se va recibir (params, body -json, headers, query)
4. Se debe tener claro el tipo de respuesta que se va enviar (JSON, status)
*/


//Función: OBTENER NEGOCIO
/*
Método frontend: GET
Propiedad HTTP: params -URL
Respuesta backend: JSON (mensaje, datos de BD)
*/
const obtenerNegocio = async(req, res) => {
    const{id} = req.params;
    try{
        const response = await executeQuery(`SELECT * FROM negocios WHERE id_negocio = ${id}`);
        const data = {
            message: ` ${response.length} datos encontrados`,
            datos: response.length > 0 ? response[0] : null
        }
        res.send(data); //Envío un Json
    }catch(error){
        console.log(error);
        res.status(500).send(error);
    }
    //res.send("obtenerNegocio desde negociosControllers.ts");
}



//Función: OBTENER NEGOCIOS
/*
Método frontend: GET
Propiedad HTTP: ninguno
Respuesta backend: JSON (mensaje, datos de BD)
*/
const obtenerNegocios = async(req, res) => {
    const{categoria} = req.params;
    try{
        const response = await executeQuery(`SELECT * FROM negocios WHERE categoria_negocio = "${categoria}"`);
        const data = {
            message: ` ${response.length} datos encontrados`,
            datos: response.length > 0 ? response : null
        }
        res.send(data); //Envío un Json
    }catch(error){
        console.log(error);
        res.status(500).send(error);
    }
    //res.send("obtenerNegocios desde negociosControllers.ts");
}



//Exportar múltiples funciones para ser usadas en el archivo "negocios.ts"
export {obtenerNegocio, obtenerNegocios}