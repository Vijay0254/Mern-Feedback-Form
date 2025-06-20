const express = require('express')
const router = express.Router()
const { postFeedbackController } = require('../Controller/feedbackController')

router.post('/post', postFeedbackController)

module.exports = router