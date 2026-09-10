# Order Service

Order management microservice.

## Responsibilities

- Create orders
- Retrieve orders
- Retrieve individual orders
- Update order status

## Port

3002

## API

GET /health

GET /orders

GET /orders/:id

POST /orders

PATCH /orders/:id/status

## Create Order

POST /orders

Example:

{
  "userId": 1,
  "product": "Laptop",
  "quantity": 1,
  "amount": 999.99
}

## Update Status

PATCH /orders/1/status

Example:

{
  "status": "PROCESSING"
}

## Run

npm install

npm start

## Test

npm test

## Docker

docker build -t order-service .

docker run -p 3002:3002 order-service

## Repository

https://github.com/piyushgarg949-commits/order-service
