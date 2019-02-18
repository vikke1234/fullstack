const supertest = require("supertest")
const app = require("../app")
const User = require("../models/user")
const helper = require("./user_test_helper")

const api = supertest(app)

beforeEach(async () => {
  await User.remove({})
  const user = new User({ username: "accounttest", password: "sikrit" })
  await user.save()
})

describe("make accounts", async () => {
  test("make a valid account", async () => {
    await api
      .post("/api/users")
      .send(helper.validAccount)
      .expect(200)
      .expect("Content-Type", /application\/json/)
    const response = await api.get("/api/users")
    const usernames = response.body.map(user => user.username)

    expect(response.body.length).toBe(2)
    expect(usernames).toContain("valid")
  })

  test("try to make an invalid account", async () => {
    await api
      .post("/api/users")
      .send(helper.invalidAccount)
      .expect(400)
      .expect("Content-Type", /application\/json/)
  })
})

test("get accounts", async () => {
  const response = await api.get("/api/users")
  expect(response.body.length).toBe(1)
})