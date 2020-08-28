const express = require('express');
const md5 = require('blueimp-md5')
const router = express.Router();
const { UserModel } = require('../db/models.js')
const filter = { password: 0, __v: 0}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// router.post('/register', function(req, res, next) {
//   const { username, password } = req.body
//   if ( username === 'admin' ) {
//     res.send({code: 1, msg: 'username exits'})
//   } else {
//     res.send({code: 0, data: {id: '11', username, password}})
//   }
// })

router.post('/register', function(req, res, next){
  const { username, password, type } = req.body

  UserModel.findOne({username}, function(err, userDoc) {
    if ( userDoc ) {
      res.send({ code: 1, msg: 'username exits' })
    } else {
      new UserModel({username, password: md5(password), type}).save(function(error, user) {
        const data = {username, type, _id: user._id}
        res.cookie('userid', user._id, {maxAge: 1000*60*60*24*7})
        res.send({code: 0, data})
      })
    }
  })

})

router.post('/login', function(req, res, next) {
  const { username, password } = req.body

  UserModel.findOne({username, password: md5(password)}, filter, function(err, user) {
    if ( ! user ) {
      res.send({code: 1, data: 'username or password error'})
    } else {
      res.cookie('userid', user._id, {maxAge: 1000*60*60*24*7})
      res.send({code: 0, data: user})
    }
  })
})

module.exports = router;
