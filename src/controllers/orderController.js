const orders = require("../models/orderModel");

const getOrders = (req, res) => {
  res.json(orders);
};

const createOrder = (req, res) => {
  const { userId, product, quantity } = req.body;

  if (!userId || !product || !quantity) {
    return res.status(400).json({
      message: "userId, product and quantity are required"
    });
  }

  const order = {
    id: orders.length + 1,
    userId,
    product,
    quantity,
    status: "CREATED"
  };

  orders.push(order);

  res.status(201).json(order);
};

module.exports = {
  getOrders,
  createOrder
};
