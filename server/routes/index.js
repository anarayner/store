const Router = require('express')
const router = new Router()

const deviceRouter = require('./deviceRouter')
const userRouter  = require('./userRouter')
const typeRouter = require('./typeRouter')
const brandRouter = require('./brandRouter')

// объединяем все роутер
// первым параметром указываем url по которому наш роутер будет отрабатывать, вторым сам роутер
router.use('/user', userRouter)
router.use('/type', typeRouter)
router.use('/brand', brandRouter)
router.use('/device', deviceRouter)


module.exports = router