var router = require('express').Router()

router.get('/', function (req, res){
  res.sendFile(__dirname +'layouts/posts.html')
})
module.exports = router
