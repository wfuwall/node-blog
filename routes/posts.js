const express = require('express')
const router = express.Router()
const checkLogin = require('../middlewares/check').checkLogin

router.get('/', (req, res, next) => {
  res.send('主页')
})

// 发表一篇文章 /posts/create
router.post('/create', checkLogin, (req, res, next) => {
  res.send('发表文章')
})


module.exports = router