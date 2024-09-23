const OrderRepo = require("../repository/OrderRepo")

async function createOrder(req, res) {
    console.log("data",req.body);
  try {
    const result = await OrderRepo.createOrder(req.body);
    res.status(200).json({
      status: true,
      message: 'Order created successfully!',
      data: result,
    });
  } catch (err) {
    res.status(400).json({
      status: false,
      message: 'Error while saving data: ' + err.message,
      data: null,
    });
  }
}

async function getOrders(req, res) {
  try {
    const results = await OrderRepo.getOrders();
    res.status(200).json({
      status: true,
      message: 'Orders fetched successfully!',
      data: results,
    });
  } catch (err) {
    res.status(400).json({
      status: false,
      message: 'Error while saving data: ' + err.message,
      data: null,
    });
  }
}

async function getById(req, res) {
  try {
    const id = req.params.id;
    const results = await OrderRepo.getById(id);
    res.status(200).json({
      status: true,
      message: 'Order fetched successfully!',
      data: results,
    });
  } catch (err) {
    res.status(400).json({
      status: false,
      message: 'Error while saving data: ' + err.message,
      data: null,
    });
  }
}

async function updateOrder(req, res) {
  console.log("data",req.body);
try {
  const modal = req.body;
  modal.id = req.params.id;
  const result = await OrderRepo.updateOrder(modal);
  res.status(200).json({
    status: true,
    message: 'Order Updated successfully!',
    data: result,
  });
} catch (err) {
  res.status(400).json({
    status: false,
    message: 'Error while saving data: ' + err.message,
    data: null,
  });
}
}

module.exports = {
    createOrder,
    getOrders,
    getById,
    updateOrder
};
