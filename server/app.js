import Koa from 'koa'
import views from 'koa-views'
import json from 'koa-json'
import onerror from 'koa-onerror'
import bodyparser from 'koa-bodyparser'
import logger from 'koa-logger'
import koastatic from 'koa-static'
import indexRouter from './routes/index.js'
import userRouter from './routes/user.js'
import appRouter from './routes/app.js'

const app = new Koa()

// error handler
onerror(app)

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(koastatic('./dist'))

app.use(views('./dist', {
  extension: 'html'
}))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(indexRouter.routes(), indexRouter.allowedMethods())
app.use(userRouter.routes(), userRouter.allowedMethods())
app.use(appRouter.routes(), appRouter.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

export default app
