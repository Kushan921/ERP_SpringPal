const express = require('express');
const router = express.Router();
const lorryController = require('../controller/lorryController')

   
    router.post('/add', lorryController.createLorry);
    router.get('/', lorryController.get);
    router.get('/getById/:id', lorryController.getById);
    router.patch('/update/:id', lorryController.update)
    router.delete('/delete/:id', lorryController.deleteLorry)

module.exports = router;
