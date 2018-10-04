var express = require('express');
var router = express.Router();
var s3 = require('../data/aws-s3.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: s3.myDateTime(), bodyText: JSON.stringify(req.body) });
});

router.post('/', function(req, res, next) {
  res.render('index', { title: s3.myDateTime(), bodyText: JSON.stringify(req.body) });
});

router.get('/rigs', s3.getRigs);

router.get('/contacts', s3.getContacts);

module.exports = router;
