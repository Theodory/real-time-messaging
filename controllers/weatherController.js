
const request = require('request');

const { check, validationResult } = require('express-validator/check');

exports.index  =  (req, res) => {
	
	res.render('index', { weather: null, problem: null });

}


exports.getWeather  =  (req, res) => {
	let form = req.body.city
	let url = `http://api.openweathermap.org/data/2.5/weather?q=${form}&appid=${process.env.MAP_ORG_API_KEY}`


	return new Promise((resolve,reject) => {
		try {
			request(url, async (err,response,body) => {
				if(err){
					let textMessage = `Error occured`
					res.render('index',{weather: null,problem: textMessage});
				}else{
					let data = JSON.parse(body)
					//console.log(data);
					if(data.cod === '404'){
						res.render('index',{problem: data.message,weather: null});
					}else{
						let textMessage = `Here at ${data.name } weather is ${data.main.temp}`
						res.render('index',{weather: textMessage,problem: null});
					}
				}

			})
		}
		catch(error) {
			let textMessage = `Error occured`
			res.render('index',{problem: textMessage,weather: null});
		}
	})

	
}
