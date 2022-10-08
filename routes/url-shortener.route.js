const express = require('express')
const createLinkController = require('../controllers/create-link.controller')
const getURLController = require('../controllers/get-url.controller')
const homeController = require('../controllers/home.controller')
const notFoundController = require('../controllers/not-found.controller')
const urlVerifyMiddleware = require('../middlewares/url-verify.middleware')

const router = express.Router()

router.get('/', homeController)

router.get('/goto/:urlKey', getURLController)

router.post('/create', urlVerifyMiddleware, createLinkController)

router.all('*', notFoundController)

module.exports = router
