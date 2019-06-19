
var router = require('express').Router();
const weatherController = require('../controllers/weatherController');


/* GET home page. */
router.get('/', weatherController.index);
router.post('/',  weatherController.getWeather)


module.exports = router;
