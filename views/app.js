const Koa = require('koa');
const views = require('koa-views');
const path = require('path');
const app = new Koa();

app.use(views(path.join(__dirname, './views'),{
	extension: "ejs"
}));

app.use( async (ctx) => {
	let title = "views test";
	await ctx.render('index', {
		title,
	})
});

app.listen(3210, () => {
	console.log("app is listening on port 3210!");
});
