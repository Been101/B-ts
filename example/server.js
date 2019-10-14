const Koa = require('koa')
const Router = require('koa-router');
const path = require('path')


const app = new Koa();
const router = new Router();
app.use(require('koa-static')(path.resolve(__dirname, 'dist')));

router.post('/api/post', (ctx, next) => {
  // ctx.router available
  ctx.body = { name: 'ming' }
});

router.get('/api/get', (ctx, next) => {
  // ctx.router available
  console.log('--------------------------------')
  ctx.body = "{ name: 'ming' }"
});

app
  .use(router.routes())
  .use(router.allowedMethods());
app.listen(8082)
console.log('listen 8082')