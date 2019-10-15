const express = require('express')
const path = require('path')
const indexRouter = require('./routes/index')
const userRouter = require('./routes/users')
const app = express()

// 设置存放模板文件的目录, 设置模板引擎为ejs
app.set('views', path.join(__dirname, 'views')) 
app.set('view engine', 'ejs')

// 通过 app.use 挂载路由实例到不同的路径
app.use('/', indexRouter)
app.use('/user', userRouter)
app.listen(3000)