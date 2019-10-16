# node-blog
使用 Express + MongoDB 搭建多人博客,根据 [N-blog](https://github.com/nswbmw/N-blog) 文档搭建，并做相应的记录和注释

### 目录
- config：配置文件目录
- history： 项目开始前的demo历史记录
- models：存放操作数据库的文件
- public：存放静态文件，如样式、图片等等
- routes：存放路由文件
- views：存放模板文件
- index.js：程序入口主文件
- package.json：存储项目名、描述、作者、依赖等信息

### 依赖说明
- express：node框架
- express-session：session 中间件
- connect-mongo：将 session 存储于 mongodb，结合 express-session 使用
- connect-flash：页面通知的中间件，基于 session 实现
- ejs：ejs模板
- express-formidable：接收表单及文件上传的中间件
- config-lite：读取配置文件
  - config-lite 支持 .js、.json、.node、.yml、.yaml 后缀的文件，依次降级查找
  - config-lite 会根据环境变量（NODE_ENV）的不同加载 config 目录下不同的配置文件
  - 不设置 NODE_ENV，则读取默认的 default 配置文件
  - 设置了 NODE_ENV，则会合并指定的配置文件和 default 配置文件作为配置
- marked：markdown 解析
- moment：时间格式化
- mongolass：mongodb 驱动
- objectid-to-timestamp：根据 ObjectId 生成时间戳
- sha1：sha1 加密，用于密码加密
- winston：日志
- express-winston：express 的 winston 日志中间件

### 开发环境的配置
- node v10.15.3
- express v4.17.1
- 前端页面使用 jQuery + Semantic-UI 实现

### supervisor
supervisor可以解决每次修改代码保存后，都需要手动重启程序的问题。它会监听当前目录下node和js后缀的文件，当这些文件发生改动时，其会自动重启程序。
```
npm i -g supervisor
```
> 可能跟nodemon功能差不多吧

### EditorConfig
EditorConfig 是一个保持缩进风格的一致的工具，当多人共同开发一个项目的时候，往往会出现每个人用不同编辑器的情况，而且有的人用 tab 缩进，有的人用 2 个空格缩进，有的人用 4 个空格缩进，EditorConfig 就是为了解决这个问题而诞生。
- VS Code需要安装一个插件：`EditorConfig for VS Code`
- 在项目根目录新建 .editorconfig 文件，并添加以下内容
```
# editorconfig.org
root = true

[*]
indent_style = space
indent_size = 2
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true
tab_width = 2

[*.md]
trim_trailing_whitespace = false

[Makefile]
indent_style = tab
```
> 这里我们使用 2 个空格缩进，tab 长度也是 2 个空格。trim_trailing_whitespace 用来删除每一行最后多余的空格，insert_final_newline 用来在代码最后插入一个空的换行

### ejs语法
- <% code %>：运行 JavaScript 代码，不输出
- <%= code %>：显示转义后的 HTML内容
- <%- code %>：显示原始 HTML 内容, 也就是可以识别html标签
- 使用 ejs 内置的 include 方法, 可以使拆分成的模板组件可复用，主模板结构更清晰
```
<%- include('header') %>
<h1><%= name.toUpperCase() %></h1>
<p>hello, <%= name %></p>
<%- include('footer') %>
```