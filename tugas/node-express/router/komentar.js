const express = require('express')
const router = express.Router()

const komentarcontroller = require('../controllers/komentar')

router.route('/komentar')
	.get(komentarcontroller.index)
	.getpost(komentarcontroller.store)

router.get('/komentars', komentarcontroller.index)

module.exports = router