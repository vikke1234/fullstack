const blogRouter = require("express").Router()
const Blog = require("../models/blog")
const User = require("../models/user")
const jwt = require("jsonwebtoken")
const logger = require("../utils/logger")

blogRouter.get("/", async (request, response, next) => {
  const blogs = await Blog.find({}).populate("user", { blogs: 0 })
  response.json(blogs.map(blog => blog.toJSON()))
})

blogRouter.post("/", async (request, response, next) => {
  const body = request.body

  const token = request.token
  try {
    const decodedToken = jwt.verify(token, process.env.SECRET)
    if (!token || !decodedToken.id) {
      logger.info("error authenticating")
      return response.status(401).json({ error: "token missing or invalid" })
    }
    const user = await User.findById(decodedToken.id)
    const blog = new Blog({
      title: body.title,
      author: body.author,
      url: body.url,
      likes: body.likes === undefined ? 0 : body.likes,
      user: user._id
    })

    const savedBlog = await blog.save()
    user.blogs = user.blogs.concat(savedBlog.id)
    await user.save()
    response.json(savedBlog.toJSON())
  } catch (exception) {
    next(exception)
  }
})

blogRouter.delete("/:id", async (request, response, next) => {
  try {
    const blog = await Blog.findById(request.params.id)
    const decodedToken = jwt.verify(request.token, process.env.SECRET)
    logger.info(
      "decoded user id: ",
      decodedToken.id.toString(),
      "\nblog user id:    ",
      blog.user.toString(),
      "\n same: ",
      decodedToken.id.toString() === blog.user.toString()
    )
    if (decodedToken.id.toString() === blog.user.toString()) {
      logger.info("removing: ", blog)
      blog.remove()
    }
    response.status(204).end()
  } catch (exception) {
    next(exception)
  }
})

blogRouter.put("/:id", async (request, response, next) => {
  const data = request.body
  const blog = {
    author: data.author,
    title: data.title,
    url: data.url,
    likes: data.likes
  }

  try {
    await Blog.findByIdAndUpdate(request.params.id, blog, { new: true })
    response.status(200).end()
  } catch (exception) {
    next(exception)
  }
})
module.exports = blogRouter
