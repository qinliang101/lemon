import Router from 'koa-router'
import query from '../config/mysql.js'

const router = Router()

router.prefix('/user')

router.get('/getUserInfo', async (ctx, next) => {
  console.log('所在的环境')
  console.log(process.env.NODE_ENV)
  const uid = ctx.query.uid
  const user = await query(`select * from account where uid = ?`, [uid])
  ctx.body = user[0]
})

export default router
