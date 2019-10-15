const express = require('express')
const router = express.Router()
const checkLogin = require('../middlewares/check').checkLogin

// POST /comments/create 创建留言
router.post('/create', checkLogin, (req, res, next) => {
  res.send('创建留言')
})

module.exports = router