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

rutas.put('/Generos/EditarG/:id', (req, res) =>{
    if(BD) {
        const {id} = req.params;
        const genero = req.body;
        let sql = 'UPDATE generos set ? where Id = ?';
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
);
rutas.delete('/Generos/:id', (req, res) =>{
    if(BD){
        const {id} = req.params;
        let sql = 'DELETE FROM Generos where Id = ?';
        BD.query(sql, [id], (err, rows) => {
            if(err){
                res.json(err)
            } else {
                let mensaje="";
                if(rows.affectedRows === 0){
                    mensaje="Genero no encontrado "
                }else {
                    mensaje="Genero eliminado con exito!"
                }

                res.json({error: false, data: rows, mensaje: mensaje})
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


rutas.get('/peliculas', (req, res) =>{
    if(BD){
        let sql = 'select * from peliculas';
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
rutas.get('/peliculas/EditarP/:id', (req, res) =>{
    if(BD){
        const { id } = req.params;
        let sql=`select * from peliculas where Id = ${BD.escape(id)}`;
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

rutas.put('/peliculas/EditarP/:id', (req, res) =>{
    if(BD) {
        const {id} = req.params;
        const genero = req.body;
        let sql = 'UPDATE peliculas set ? where Id = ?';
        BD.query(sql, [genero, id], (err, rows) => {
            if(err){
                res.json(err)
            } else {

                let mensaje = "";
                if(rows.changedRows === 0)
                     mensaje="La informacion es la misma"
                else
                    mensaje="pelicula modificada con exito"

                res.json({error: false, data: rows, mensaje: mensaje})
            }
        })
    }
}
);
rutas.delete('/peliculas/:id', (req, res) =>{
    if(BD){
        const {id} = req.params;
        let sql = 'DELETE FROM peliculas where Id = ?';
        BD.query(sql, [id], (err, rows) => {
            if(err){
                res.json(err)
            } else {
                let mensaje="";
                if(rows.affectedRows === 0){
                    mensaje="pelicula no encontrada "
                }else {
                    mensaje="pelicula eliminada con exito!"
                }

                res.json({error: false, data: rows, mensaje: mensaje})
            }
        })
    }
}
);





module.exports = rutas;