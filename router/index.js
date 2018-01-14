const Koa = require("koa");
const Router = require("koa-router");
const fs = require('fs');

const app = new Koa();
let bodyRouter = new Router();
let htmlRouter = new Router();

//路由器一
bodyRouter.get('/', async(ctx) =>{
    let html = `<ul>
                    <li><a href="/body">bodyPage</a></li>
                    <li><a href="/html/index">htmlPage</a></li>
                </ul>`;
    ctx.body = html;
});
bodyRouter.get("/body", async(ctx) =>{
        console.log("123")
        ctx.body = {
            code: 1,
            message: "hellw KOA!"
        };
});

//路由器二
htmlRouter.get('/index', async(ctx) =>{
    let html = await getHtml('./view/index.html');
    ctx.body = html;
});

async function getHtml(url){
    return new Promise((resolve, reject) =>{
        fs.readFile(url, 'utf8', (err, html) =>{
            if(err){
                reject(err);
            }else{
                resolve(html);
            }
        });
    });
}

//装载所有子路由器
let router = new Router();
router.use('',bodyRouter.routes(), bodyRouter.allowedMethods());
router.use("/html", htmlRouter.routes(), htmlRouter.allowedMethods());

// 加载路由中间件
app.use(router.routes()).use(router.allowedMethods());

app.listen(3210);
console.log("my first KOA project is running on port 3210!");