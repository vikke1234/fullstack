const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const cors = require("cors")
const express = require("express")

const router = require("./controllers/controllers")
const config = require("./utils/config")

const app = express()

const mongoUrl = config.MONGODB_URI
mongoose
  .connect(mongoUrl, { useNewUrlParser: true })
  .then(() => console.log("connected to ", mongoUrl))
  .catch(error => console.log("error connecting to mongoDB: ", error.message))
app.use(cors())
app.use(bodyParser.json())
app.use("/api/blogs", router)

module.exports = app