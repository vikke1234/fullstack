const mongoose = require("mongoose")
// eslint-disable-next-line no-unused-vars
const uniqueValidator = require("mongoose-unique-validator")

const userSchema = mongoose.Schema({
  username: { type: String, unique: true, required: true },
  name: String,
  password: { type: String, required: true },
  blogs: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Blog"
    }
  ]
})

userSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
    delete returnedObject.password
  }
})

userSchema.plugin(uniqueValidator)
module.exports = mongoose.model("User", userSchema)
