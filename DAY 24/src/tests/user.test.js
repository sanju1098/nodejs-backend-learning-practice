const request = require("supertest");
const app = require("../app");

describe("User APIs", () => {
  test("GET /users should return array", async () => {
    const response = await request(app).get("/users");
    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  test("POST /users should create user", async () => {
    const response = await request(app).post("/users").send({
      name: "Sanjay",
    });
    expect(response.statusCode).toBe(201);
    expect(response.body.message).toBe("User Created");
  });
});
