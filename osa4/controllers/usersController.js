const bcrypt = require("bcrypt")
const usersRouter = require("express").Router()
const User = require("../models/user")
const logger = require("../utils/logger")

usersRouter.post("/", async (request, response, next) => {
  try {
    const body = request.body
    if (body.password.length < 3) {
      return response
        .status(400)
        .json({ error: "json must be atleast 3 characters long" })
    }
    const saltRounds = 10
    const passwordHash = await bcrypt.hash(body.password, saltRounds)
    const user = new User({
      username: body.username,
      name: body.name,
      password: passwordHash
    })
    const savedUser = await user.save()
    logger.info(savedUser)
    response.json(savedUser)
  } catch (exception) {
    next(exception)
  }
})

usersRouter.get("/", async (request, response, next) => {
  const users = await User.find({}).populate("blogs", {
    title: 1,
    author: 1,
    url: 1,
    likes: 1
  })
  response.json(users.map(user => user.toJSON()))
})
module.exports = usersRouter
