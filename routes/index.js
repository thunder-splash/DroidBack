const Router = require ('express')
const router = new Router()
const userRouter = require ('../routes/userRouter')
const prefRouter = require('../routes/prefRouter')

router.use('/user', userRouter);
router.use('/pref', prefRouter);

module.exports = router