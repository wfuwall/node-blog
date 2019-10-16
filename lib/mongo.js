const config = require('config-lite')(__dirname)
const schema = require('./Schema.js')
const mongoose = require('mongoose')
mongoose.connect(config.mongodb, (err) => {
  if (err) {
    console.log('连接数据库失败')
  } else {
    console.log('连接数据库成功')
  }
})

// 创建user表模型
const User = mongoose.model('user', schema.UserSchema)