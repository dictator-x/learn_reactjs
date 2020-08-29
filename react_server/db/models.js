const mongoose = require('mongoose')
const DB_NAME = 'test'

mongoose.connect(`mongodb://localhost:27017/${DB_NAME}`, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
const conn = mongoose.connection
conn.on('connected', () => {
  console.log('db connection success!')
})

const userSchema = mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  type: { type: String, required: true },
  avatar: { type: String },
  website: { type: String },
  company: { type: String },
  email: { type: String },
  name: { type: String },
  phone: { type: String },
  address: { type: String }
})

const UserModel = mongoose.model('user', userSchema)

exports.UserModel = UserModel
