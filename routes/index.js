var express = require('express');
var axios = require('axios');
var router = express.Router();



/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { weather: '' });
});

router.post('/',  (req, res) => {
	let form = req.body.city
	let url = `http://api.openweathermap.org/data/2.5/weather?q=${form}&appid=${process.env.MAP_ORG_API_KEY}`

	axios.post(url)
	.then((body) => {
		console.log(body)
	})
	.catch((error) => {
		console.log(error)
	})


})



module.exports = router;
