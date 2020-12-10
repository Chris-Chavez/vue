const connection = require('./connection');

function listarGeneros(req, res) {
    if(connection){
        let sql = 'select * from GENEROS';
        connection.query(sql, (err, generos) => {
            if(err){
                res.json(err);
            } else {
                console.log(generos);
                res.json(generos);
            }
        })
    }
}

function obtenerGeneros(req,res){
    if(connection){
        const { id } = req.params;
        let sql=`select * from GENEROS where id = ${connection.escape(id)}`;
        connection.query(sql, (err,generos) => {
            if(err){
                res.json(err)
            } else {
                let mensaje="";
                if(generos===undefined || generos.length === 0)
                mensaje="generos no encontrada"
                res.json({error:false,data:generos,mensaje:mensaje})
              
            }
        })
    }

}

function crear(req,res){
    if(connection){
        const generos= req.body;
        if(!generos.nombre){
            return res.status(400).send({ error:true, mensaje:"El nombre es obligatorio"})
        }
        let sql= 'INSERT INTO GENEROS set ?';
        connection.query(sql, [generos],(err,rows) => {
            if(err){
                res.json(err);
            } else {
                res.json({error:false, data: rows, mensaje:"generos creada con exito"})
            }
        })
    
    }
}

function editar(req, res){
    if(connection) {
        const {id} = req.params;
        const generos = req.body;
        let sql = 'UPDATE personas set ? where id = ?';
        connection.query(sql, [generos, id], (err, rows) => {
            if(err){
                res.json(err)
            } else {

                let mensaje = "";
                if(rows.changedRows === 0)
                     mensaje="La informacion es la misma"
                else
                    mensaje="generos modificada con exito"

                res.json({error: false, data: rows, mensaje: mensaje})
            }
        })
    }
}

function eliminar(req,res){
    if(connection){
        const {id} = req.params;
        let sql = 'DELETE FROM personas where id = ?';
        connection.query(sql, [id], (err, rows) => {
            if(err){
                res.json(err)
            } else {
                let mensaje="";
                if(rows.affectedRows === 0){
                    mensaje="generos no encontrada "
                }else {
                    mensaje="generos eliminada con exito!"
                }

                res.json({error: false, data: rows, mensaje: mensaje})
            }
        })
    }
}

module.exports = {
    listarGeneros,
    obtenerGeneros,
    crear,
    editar,
    eliminar
}