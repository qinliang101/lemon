// const router = require('koa-router')()
// const { query } = require('../config/mysql')
import Router from 'koa-router'
import query from '../config/mysql.js'

const router = Router()

router.get('/', async (ctx, next) => {
    await ctx.render('index', {
        title: 'Hello Koa 2!'
    })
})

router.get('/getUserInfo', async (ctx, next) => {
    console.warn(ctx.query.uid)
    const uid = ctx.query.uid
    const user = await query(`select * from account where uid = ${uid};`)
    console.warn(user)
    ctx.body = user[0]
})

export default router
