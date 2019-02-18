const mongoose = require("mongoose")
const supertest = require("supertest")
const app = require("../app")
const Blog = require("../models/blog")
const User = require("../models/user")
const helper = require("./blog_test_helper")

const api = supertest(app)
let token = null

beforeAll(async () => {
  await User.remove({})
  const fuckeduser = await api
    .post("/api/users")
    .set({ "Content-Type": "application/json" })
    .send({ username: "test account", name: "test", password: "super sikrit" })
  const user = fuckeduser.body
  const fuckedtoken = await api
    .post("/api/login")
    .send({ username: user.username, password: "super sikrit" })
  token = fuckedtoken.body.token
})

beforeEach(async () => {
  await Blog.remove({})
  const promiseArray = helper.initialBlogs.map(blog => new Blog(blog).save())
  await Promise.all(promiseArray)
})

describe("getting blogs", async () => {
  test("blogs returned as json", async () => {
    await api
      .get("/api/blogs")
      .expect(200)
      .expect("Content-Type", /application\/json/)
  })

  test("there are 2 blogs", async () => {
    const response = await api.get("/api/blogs")

    expect(response.body.length).toBe(2)
  })
  test("there is an id field", async () => {
    const response = await api.get("/api/blogs")

    const content = response.body
    expect(content[0].id).toBeDefined()
  })
})

describe("posting blogs", async () => {
  test("a valid blog can be added", async () => {
    await api
      .post("/api/blogs")
      .set({ Authorization: "Bearer " + token })
      .send(helper.valid_data)
      .expect(200)
      .expect("Content-Type", /application\/json/)

    const response = await api.get("/api/blogs")
    const authors = response.body.map(r => r.author)

    expect(response.body.length).toBe(helper.initialBlogs.length + 1)
    expect(authors).toContain(helper.valid_data.author)
  })

  test("an invalid blog cannot be added", async () => {
    await api
      .post("/api/blogs")
      .set({ Authorization: "Bearer " + token })
      .send(helper.invalid_data)
      .expect(400)

    const response = await api.get("/api/blogs")

    expect(response.body.length).toBe(helper.initialBlogs.length)
  })

  test("post without likes", async () => {
    await api
      .post("/api/blogs")
      .set({ Authorization: "Bearer " + token })
      .send(helper.data_without_likes)
      .expect(200)
      .expect("Content-Type", /application\/json/)

    const response = await api.get("/api/blogs")
    const content = response.body.map(r => {
      return { title: r.title, likes: r.likes }
    })
    expect(content).toContainEqual({ title: "1984", likes: 0 })
  })
})

describe("deleting blogs", async () => {})
afterAll(() => {
  mongoose.connection.close()
})
