const express = require('express');
const router = express.Router();
const routeController = require('../controller/RouteController')

   
    router.post('/add', routeController.createRoute);
    router.get('/', routeController.get);
    router.get('/getById/:id', routeController.getById);
    router.patch('/update/:id', routeController.update)
    router.delete('/delete/:id', routeController.deleteRoute)

module.exports = router;
