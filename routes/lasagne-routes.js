const express = require('express')
const router = express.Router()
const { index, create } = require('../controllers/lasagne-controller')

//we are going to create routes for the lasagne page
router.get('/', index)
router.get('/create', create)

module.exports = router