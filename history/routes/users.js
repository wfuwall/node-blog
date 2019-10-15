const express = require('express')
const router = express.Router()

router.get('/:name', (req, res) => {
  // res.send('hello ' + req.params.name)
  // 调用res.render 函数渲染 ejs 模板，第一个参数模板的名字，第二个参数是传给模板的数据
  res.render('user', {
    name: req.params.name
  })
})

module.exports = router