const Koa = require('koa');
const Router = require('koa-router');
const serve = require('koa-static');
const send = require('koa-send');

const app = new Koa();
const router = new Router();

router.post('/download', function * () {
  console.log('THIS IS RUNNING'); // This runs

  const path = `${__dirname}/test.html`;
  this.attachment('test.html');
  send(this, path);
});

app.use(serve(`${__dirname}/public`));
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000);