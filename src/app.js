const express = require("express");
const orderRoutes = require("./routes/orderRoutes");

const app = express();

app.use(express.json());

app.get("/health", (req, res) => {
  res.json({
    service: "order-service",
    status: "UP"
  });
});

app.use("/orders", orderRoutes);

module.exports = app;
