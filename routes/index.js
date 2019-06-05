var express = require('express');
var router = express.Router();
const axios = require('axios')



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { weather: '' });
});


axios.post('https://flaviocopes.com/todos', {
  todo: 'Buy the milk'
})
.then((res) => {
  console.log(`statusCode: ${res.statusCode}`)
  console.log(res)
})
.catch((error) => {
  console.error(error)
})


module.exports = router;
