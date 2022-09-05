import Router from 'koa-router'
import query from '../config/mysql.js'

const router = Router()

router.prefix('/app')

router.post('/createWebApp', async (ctx, next) => {
    const body = ctx.request.body
    await query('insert into app set ? ', [body])
    ctx.body = body
})

export default router