const mongoose = require('mongoose')
const DB_NAME = 'test'

mongoose.connect(`mongodb://localhost:27017/${DB_NAME}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
})

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

const chatSchema = mongoose.Schema({
  from: { type: String, required: true },
  to: { type: String, required: true },
  chat_id: { type: String, required: true },
  content: { type: String, required: true },
  read: { type: Boolean, default: false },
  create_time: { type: Number }
})

const ChatModel = mongoose.model('chat', chatSchema)

exports.UserModel = UserModel
exports.ChatModel = ChatModel
