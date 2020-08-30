const express = require('express');
const md5 = require('blueimp-md5')
const router = express.Router();
const { UserModel } = require('../db/models.js')
const filter = { password: 0, __v: 0}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

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

router.post('/update', function(req, res, next) {
  const userid = req.cookies.userid
  if ( ! userid ) {
    return res.send({ code: 1, data: 'please login' })
  }

  const user = req.body
  UserModel.findOneAndUpdate({_id: userid}, user, function(error, oldUser){
    if ( ! oldUser ) {
      res.clearCookie('userid')
      return res.send({ code: 1, data: 'please login' })
    } else {
      const { _id, username, type } = oldUser
      return res.send({code: 0, data: Object.assign(user, {_id, username, type})})
    }
  })
})


router.get('/user', function(req, res) {
  const userid = req.cookies.userid
  if ( ! userid ) {
    return res.send({ code: 1, data: 'please login' })
  }

  UserModel.findOne({_id: userid}, filter, function(error, user) {
    if ( ! user ) {
      res.clearCookie('userid')
      res.send({ code: 1, data: 'please login' })
    }
    res.send({code: 0, data: user})
  })
})

router.get('/userlist', function(req, res){
  const { type } = req.query
  UserModel.find({type: type, avatar: {$ne: null}}, filter, function(err, users){
    res.send({ code: 0, data: users })
  })
})

module.exports = router;
