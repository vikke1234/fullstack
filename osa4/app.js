const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const cors = require("cors")
const express = require("express")

const blogRouter = require("./controllers/blogController")
const usersRouter = require("./controllers/usersController")
const loginRouter = require("./controllers/loginController")

const config = require("./utils/config")
const logger = require("./utils/logger")
const middleware = require("./utils/middleware")

const app = express()
app.use(cors())
app.use(bodyParser.json())

app.use(middleware.tokenExtractor)
app.use(middleware.requestLogger)

app.use("/api/login", loginRouter)
app.use("/api/users", usersRouter)
app.use("/api/blogs", blogRouter)

app.use(middleware.errorHandler)
app.use(middleware.unknownEndpoint)

const mongoUrl = config.MONGODB_URI
logger.info("connecting to ", mongoUrl)
mongoose
  .connect(mongoUrl, { useNewUrlParser: true })
  .then(() => console.log("connected to ", mongoUrl))
  .catch(error => console.log("error connecting to mongoDB: ", error.message))

module.exports = app
