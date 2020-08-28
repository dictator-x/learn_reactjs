const mongoose = require('mongoose')
const DB_NAME = 'test'

mongoose.connect(`mongodb://localhost:27017/${DB_NAME}`, {useNewUrlParser: true, useUnifiedTopology: true})
const conn = mongoose.connection
conn.on('connected', () => {
  console.log('db connection success!')
})

const userSchema = mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  type: { type: String, required: true },
  header: { type: String },
  post: { type: String },
  info: { type: String },
  company: { type: String },
  salary: { type: String }
})

const UserModel = mongoose.model('user', userSchema)

exports.UserModel = UserModel
