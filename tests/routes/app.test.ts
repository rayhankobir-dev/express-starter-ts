import request from "../setup";

describe("GET /api", () => {
  it("should return Hello, world!", async () => {
    const response = await request.get("/api");
    expect(response.status).toBe(200);
    expect(response.text).toBe("Hello, world!");
  });
});
