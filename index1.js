var koa = require('koa');
var router = require('koa-router');
var app = new koa();

var router = router();              
router.get("/", (ctx, next) => {
    ctx.render("/test.html");
  })

app.use(router.routes());          
app.listen(8080);