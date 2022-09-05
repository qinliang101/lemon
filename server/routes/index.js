import Router from 'koa-router'
import query from '../config/mysql.js'

const router = Router()

router.get('/', async (ctx, next) => {
    await ctx.render('index', {
        title: 'Hello Koa 2!'
    })
})

export default router
