
const request = require('request');

const { check, validationResult } = require('express-validator/check');

exports.index  =  (req, res) => {
	
	res.render('index', { weather: null, error: null });

}


exports.getWeather  =  (req, res) => {
	let form = req.body.city
	let url = `http://api.openweathermap.org/data/2.5/weather?q=${form}&appid=${process.env.MAP_ORG_API_KEY}`

	request(url, async (err,response,body) => {

		return new Promise((resolve,reject) => {

			if (err) {

				reject()

			} else {

				resolve(() => {
					let data = JSON.parse(body)
				let textMessage = `Here at ${data.name } weather is ${data.main.temp}`
				res.render('index',{weather: textMessage,error: null});
				})
			}
			

		}).catch((error) => {

				let textMessage = `Error occured`
				res.render('index',{error: textMessage,weather: null});

		});
	})

	
}
