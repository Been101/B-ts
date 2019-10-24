const Koa = require('koa')
const Router = require('koa-router');
const path = require('path')
const bodyParser = require('koa-bodyparser')

const app = new Koa();
const router = new Router();

function parseData(ctx) {
  return new Promise((resolve, reject) => {
    try {
      let str = ''
      ctx.req.on('data', (data) => {
        str += data
      })
      ctx.req.addListener('end', () => {
        resolve(str)
      })
    } catch (err) {
      reject(err)
    }
  });
}

app.use(bodyParser())
app.use(require('koa-static')(path.resolve(__dirname, 'dist')));

router.post('/api/post', async (ctx, next) => {
  // ctx.router available
  // let data = await parseData(ctx)
  const data = ctx.request.body
  console.log(data)
  ctx.body = data
});

router.get('/api/get', async (ctx, next) => {
  // ctx.router available
  console.log('--------------------------------')
  ctx.body = "{ name: 'ming' }"
});

app
  .use(router.routes())
  .use(router.allowedMethods());
app.listen(8082)
console.log('listen 8082')