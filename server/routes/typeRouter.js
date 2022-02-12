const Router = require('express')
const router = new Router()
const TypeController = require('../controllers/typeController')
const checkRole = require('../middleware/checkRoleMiddleware')


// логику отделяем в Controllers
router.post('/', checkRole('ADMIN'), TypeController.create )
router.get('/', TypeController.getAll)

module.exports = router