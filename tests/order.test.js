const request = require("supertest");

const app = require("../src/app");

describe("Order Service", () => {

  test("Health endpoint", async () => {
    const response = await request(app)
      .get("/health");

    expect(response.statusCode).toBe(200);
  });

  test("Get orders", async () => {
    const response = await request(app)
      .get("/orders");

    expect(response.statusCode).toBe(200);

    expect(Array.isArray(response.body))
      .toBe(true);
  });

});
