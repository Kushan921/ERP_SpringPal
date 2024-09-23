const Order = require("../models/orderModel")

async function createOrder(model) {
  try {
    console.log("repo data :",model);
    
    const newOrder = await new Order({
      customId: model.customId,
      customer: {
        customerName: model.customerName,
        customerMobile: model.customerMobile,
        customerAddress: model.customerAddress,
      },
      productName: model.productName,
      productCategory: model.productCategory,
      size: model.size,
      color: model.color,
      quantity: model.quantity,
      price: {
        price: model.price,
        total: model.total,
        advance: model.advance,
        balance: model.balance,
      },
      shipping: model.shipping,
      discount: model.discount,
      placeDate: new Date(),
      deliverDate: model.devilerDate,
      placeBy: model.placeBy,
      orderStatus: model.orderStatus,
      factoryStatus: model.factoryStatus,
      note: model.note,
      lorryNo: model.lorryNo,
    });

    return await newOrder.save();
  } catch (err) {
    throw new Error('Failed to save order! ' + err.message);
  }
}

async function getOrders() {
  try {
    const orders = await Order.find();

    return orders;
  } catch (err) {
    throw new Error('Failed to get orders! ' + err.message);
  }
}

async function getById(id) {
  try {
    const order = await Order.findById(id);

    return order;
  } catch (err) {
    throw new Error('Failed to get order! ' + err.message);
  }
}

async function updateOrder(model) {
  try {
    console.log("repo data :",model);

    const order = await Order.findById(model.id)

    if(!order){
      throw new Error("Order Not Found with this id..")
    }
    
    const newOrder = await new Order({
      customId: model.customId,
      customer: {
        customerName: model.customerName,
        customerMobile: model.customerMobile,
        customerAddress: model.customerAddress,
      },
      productName: model.productName,
      productCategory: model.productCategory,
      size: model.size,
      color: model.color,
      quantity: model.quantity,
      price: {
        price: model.price,
        total: model.total,
        advance: model.advance,
        balance: model.balance,
      },
      shipping: model.shipping,
      discount: model.discount,
      placeDate: new Date(),
      deliverDate: model.devilerDate,
      placeBy: model.placeBy,
      orderStatus: model.orderStatus,
      factoryStatus: model.factoryStatus,
      note: model.note,
      lorryNo: model.lorryNo,
    });

    return await newOrder.save();
  } catch (err) {
    throw new Error('Failed to save order! ' + err.message);
  }
}

module.exports = {
  createOrder,
  getOrders,
  getById,
  updateOrder
};
