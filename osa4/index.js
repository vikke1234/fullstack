const http = require('http')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')

const config = require('./utils/config')
const router = require('./controllers/controllers')
const app = express()

const mongoUrl = config.MONGODB_URI
mongoose.connect(mongoUrl, { useNewUrlParser: true })
.then(() => console.log('connected to mongoDB'))
.catch(error => console.log('error connecting to mongoDB: ', error.message))

app.use(cors())
app.use(bodyParser.json())
app.use('/api/blogs', router)

app.listen(config.PORT, () => {
  console.log(`Server running on port ${config.PORT}`)
})