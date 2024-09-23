const express = require('express');
const router = express.Router();
const orderController = require("../controller/OrderController")

    // Define the POST route for creating an order
    router.post('/add', orderController.createOrder);
    router.get('/', orderController.getOrders);
    router.get('/getById/:id', orderController.getById);
    router.patch('/update/:id', orderController.updateOrder)

module.exports = router;
