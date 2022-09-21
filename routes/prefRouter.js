const Router = require('express')
const router = new Router()
const prefController = require('../controllers/prefController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/create', prefController.create)
router.post('/delete', prefController.delete)
router.get('/:id', prefController.getOne)
router.get('/', prefController.getAll)

module.exports = router