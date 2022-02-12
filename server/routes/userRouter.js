const Router = require('express')
const router = new Router()
const userController = require('../controllers/userController')
const authMiddleware = require('../middleware/authMiddleware')

router.post('/registration', userController.registration)
router.post('/login', userController.login)
// checking user authorization using jwt token
router.get('/auth', authMiddleware, userController.authCheck)


module.exports = router