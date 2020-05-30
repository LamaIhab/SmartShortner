const express = require('express')
const router = express.Router()
const linkController = require('../controllers/links.controller')

router.post('/shortlinks',linkController.createLink)

module.exports = router