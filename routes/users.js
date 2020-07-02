var express = require('express');
// GET, POST, PUT, DELETE...
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Respond with a resource');
});

// render: 把我們寫的東西渲染在前端
router.get('/navbar', function(req, res, next) {
  res.render('navbar');
});

module.exports = router;
