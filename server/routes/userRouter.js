const Router = require('express')
const router = new Router()
const userController = require('../controllers/userController')
const authMiddleware = require('../middleware/authMiddleware')

router.post('/registration', userController.registration)
router.post('/login', userController.login)
router.get('/auth', authMiddleware, userController.check)


// router.get('/auth', (req, res) => {res.json({message: "all working!!!"})})
// проверка http://localhost:5000/api/user/auth!!!

module.exports = router
