const mongoose = require('mongoose')
const md5 = require('blueimp-md5')

mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true})
const conn = mongoose.connection
conn.on('connected', function() {
  console.log('Mongodb connection established!')
})

const userSchema = mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  type: { type: String, required: true },
  header: { type: String }
})

const UserModel = mongoose.model('user', userSchema)

// function testSave() {
//   const userModel = new UserModel({ username: 'Messi', password: md5('123'), type: 'personal' })
//   userModel.save(function(error, user) {
//     console.log('save()', error, user)
//   })
// }

// testSave()

// function testFind() {
//   UserModel.find(function(error, users) {
//     console.log('find()', error, users)
//   })

//   UserModel.findOne({_id: '5f49298c02089058e41594b3'}, function(error, user) {
//     console.log('findOne()', error, user)
//   })
// }
// testFind()

// function testUpdate() {
//   UserModel.findByIdAndUpdate(
//     {_id: '5f49298c02089058e41594b3'},
//     { username: 'Jordan' },
//     function(error, doc) {
//       console.log(doc)
//     })
// }

// testUpdate()

function testDelete() {
  UserModel.remove({_id: '5f49298c02089058e41594b3'}, function(error, doc) {
    console.log('remove{}', error, doc)
  })
}

testDelete()
