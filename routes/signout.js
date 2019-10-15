const express = require('express')
const router = express.Router()
const checkLogin = require('../middlewares/check').checkLogin

// GET /signup 退出登录
router.get('/', checkLogin, (req, res) => {
  res.send('退出登录')
})


module.exports = router