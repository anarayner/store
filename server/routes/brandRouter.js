const Router = require('express')
const router = new Router()
const BrandController = require('../controllers/brandController')

// метод для того чтобы брэнд создавать
router.post('/', BrandController.create)
// получать все брэнды
router.get('/', BrandController.getAll )
router.delete('/', )

module.exports = router