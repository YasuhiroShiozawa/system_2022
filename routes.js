const express = require('express');

const router = express.Router()
const homeController = require('./controllers/HomeController')

router.get('/', homeController.index)
router.get('/led', homeController.led)
router.get('/led/tokyu5050', homeController.led_tokyu5050)
router.get('/train', homeController.train)

module.exports = router