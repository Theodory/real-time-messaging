var express = require('express');
var request = require('request');
const weatherController = require('./controllers/weatherController')
var router = express.Router();



/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { weather: null, error: null });
});

router.post('/',  weatherController.index())



module.exports = router;
