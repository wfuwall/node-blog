// 定义用户表的Schema
const UserSchema = mongoose.Schema({
  name: String,
  password: String,
  avatar: String,
  gender: String,
  bio: String // 人物简介
});

module.exports = {
  UserSchema
}