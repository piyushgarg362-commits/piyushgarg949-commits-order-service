const orders = require("../models/orderModel");

const getOrders = (req, res) => {
  res.json(orders);
};

const getOrderById = (req, res) => {
  const id = Number(req.params.id);

  const order = orders.find(order => order.id === id);

  if (!order) {
    return res.status(404).json({
      message: "Order not found"
    });
  }

  res.json(order);
};

const createOrder = (req, res) => {
  const {
    userId,
    product,
    quantity,
    amount
  } = req.body;

  if (
    !userId ||
    !product ||
    !quantity ||
    !amount
  ) {
    return res.status(400).json({
      message:
        "userId, product, quantity and amount are required"
    });
  }

  const order = {
    id: orders.length + 1,
    userId,
    product,
    quantity,
    amount,
    status: "CREATED"
  };

  orders.push(order);

  res.status(201).json(order);
};

const updateOrderStatus = (req, res) => {
  const id = Number(req.params.id);

  const order = orders.find(order => order.id === id);

  if (!order) {
    return res.status(404).json({
      message: "Order not found"
    });
  }

  order.status = req.body.status;

  res.json(order);
};

module.exports = {
  getOrders,
  getOrderById,
  createOrder,
  updateOrderStatus
};
