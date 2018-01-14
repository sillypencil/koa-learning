const Koa = require("koa");
const app = new Koa();

app.use(async (ctx) => {
    ctx.body = "This is my first KOA project!";
});

app.listen(3210);
console.log("my first KOA project is running on port 3210!");