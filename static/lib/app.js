const Koa = require("koa");
const path = require('path');
const static = require('koa-static');
const CONFIG = require('../config/configuration');

const app = new Koa();

//静态文件入口
const staticPath = CONFIG.staticPath;

app.use(static(
   path.join(__dirname, staticPath)
));

app.use( async ( ctx ) => {
    ctx.body = 'hello world'
});

app.listen(CONFIG.port, () => {
    console.log(`[demo] static-use-middleware is starting at port ${CONFIG.port}`)
});
