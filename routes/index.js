var express = require('express');
var request = require('request');
var router = express.Router();



/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { weather: null, error: null });
});

router.post('/',  (req, res) => {
	let form = req.body.city
	let url = `http://api.openweathermap.org/data/2.5/weather?q=${form}&appid=${process.env.MAP_ORG_API_KEY}`

	request(url,(err,response,body) => {
		let data = JSON.parse(body)
		let textMessage = `Here at ${data.name } weather is ${data.main.temp}`
		res.render('index',{weather: textMessage});
	})


})



module.exports = router;
