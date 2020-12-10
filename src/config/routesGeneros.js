const express = require('express');
const { obtenerGenero } = require('./ControllerGeneros');
const routes = express.Router();

//Importando el controlador de personas
const personasController = require('./ControllerGeneros');
//Rutas

routes.get('/', personasController.listarGeneros);

routes.get('/:id', personasController.obtenerGeneros);

routes.post('/', personasController.crear);

routes.put('/:id', personasController.editar);

routes.delete('/:id', personasController.eliminar);

module.exports = routes;