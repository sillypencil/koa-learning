KOA学习笔记
=======
### 安装KOA
`` npm install koa [--save -g] ``

### 安装router中间件
`` npm install --save koa-router ``

### 安装bodyparser中间件
`` npm install -- save koa-bodyparser ``

### cookie/session
#### 数据库储存session方案
* 将session存放在MySQL数据库中
* 需要用到中间件
	_ koa-session-minimal 适用于koa2 的session中间件，提供存储介质的读写接口 。
	_ koa-mysql-session 为koa-session-minimal中间件提供MySQL数据库的session数据读写操作。
	_ 将sessionId和对于的数据存到数据库
* 将数据库的存储的sessionId存到页面的cookie中
* 根据cookie的sessionId去获取对于的session信息