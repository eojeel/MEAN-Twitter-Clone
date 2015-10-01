var express = require('express')
var bodyParser = require('body-parser')

var app = express()
app.use(bodyParser.json())

var Post = require('./models/post')
app.post('/api/posts', function(req, res, next) {
  var post = new post({
    username: req.body.username,
    body: req.body.body
  })
  post.save(function(err, post) {
    if (err) {
      return next(err)
    }
    res.json(201, post)
  })
})

app.get('/api/posts', function(req, res) {
  res.json([{
    username: 'dickeyxxx',
    body: 'node rock!'
  }])
})

app.listen(3000, function() {
  console.log('Server listerning on', 3000)
})
