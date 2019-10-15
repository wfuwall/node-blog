module.exports = {
  port: 3000, // 程序启动监听的端口号
  session: { // express-session 的配置信息
    secret: 'my_blog',
    key: 'my_blog',
    maxAge: 2592000000
  },
  mongodb: 'mongodb://localhost:27017/my_blog' // mongodb 的地址
}