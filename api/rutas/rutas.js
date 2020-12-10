const express = require('express');
const rutas = express.Router();
const BD = require('../config/BD.js');




rutas.get('/Generos', (req, res) =>{
    if(BD){
        let sql = 'select * from generos';
        BD.query(sql, (err, tareas) => {
            if(err){
                res.send(err)
            } else {
                res.json(tareas);
            }
        })
    }
}
);
rutas.get('/Generos/EditarG/:id', (req, res) =>{
    if(BD){
        const { id } = req.params;
        let sql=`select * from generos where Id = ${BD.escape(id)}`;
        BD.query(sql, (err,persona) => {
            if(err){
                res.json(err)
            } else {
                let mensaje="";
                if(persona===undefined || persona.length === 0)
                mensaje="persona no encontrada"
                res.json({error:false,data:persona,mensaje:mensaje})
              
            }
        })
    }
}
);

rutas.post('/agregar-genero', (req, res) =>{
    if(BD){
        const genero= req.body;
        if(!genero.Genero){
            return res.status(400).send({ error:true, mensaje:"El nombre es obligatorio"})
        }
        let sql= 'INSERT INTO generos set ?';
        BD.query(sql, [genero],(err,rows) => {
            if(err){
                res.json(err);
            } else {
                res.json({error:false, data: rows, mensaje:"Genero creado con exito"})
            }
        })
    
    }
});
rutas.post('/agregar-peliculas', (req, res) =>{
    if(BD){
        const pelicula= req.body;
        if(!pelicula.Titulo){
            return res.status(400).send({ error:true, mensaje:"El nombre es obligatorio"})
        }
        if(!pelicula.Director){
            return res.status(400).send({ error:true, mensaje:"El nombre es obligatorio"})
        }
        if(!pelicula.Año){
            return res.status(400).send({ error:true, mensaje:"El nombre es obligatorio"})
        }
        let sql= 'INSERT INTO peliculas set ?';
        BD.query(sql, [pelicula],(err,rows) => {
            if(err){
                res.json(err);
            } else {
                res.json({error:false, data: rows, mensaje:"pelicula creada con exito"})
            }
        })
    
    }
});

rutas.get('/Generos/EditarG/:id',
(req, res) =>{
    if(BD) {
        const {id} = req.params;
        const genero = req.body;
        let sql = 'UPDATE genero set ? where id = ?';
        BD.query(sql, [genero, id], (err, rows) => {
            if(err){
                res.json(err)
            } else {

                let mensaje = "";
                if(rows.changedRows === 0)
                     mensaje="La informacion es la misma"
                else
                    mensaje="Genero modificada con exito"

                res.json({error: false, data: rows, mensaje: mensaje})
            }
        })
    }
}
)

rutas.get('/Peliculas', (req, res) =>{
    if(BD){
        let sql = 'select * from PELICULAS';
        BD.query(sql, (err, tareas) => {
            if(err){
                res.send(err)
            } else {
                res.json(tareas);
            }
        })
    }
}
);


rutas.get('/Peliculas/:id', (req, res) =>{
    if(BD){
        const tarea = req.params.id;
        let sql = `SELECT * FROM tareas WHERE id=${tarea}`;
        BD.query(sql, (err, tareas) => {
            if(err) {
                res.json(err)
            } else {
                res.json(tareas)
            }
        })
    }
});

rutas.get('/Peliculas/borrar/:id',
(req, res) =>{
    if(BD){
        const tarea = req.params.id;
        let sql = `DELETE FROM tareas WHERE id=${tarea}`;
        BD.query(sql, (err, tareas) => {
            if(err) {
                res.json(err)
            } else {
                res.json(tareas)
            }
        })
    }
}
)




module.exports = rutas;