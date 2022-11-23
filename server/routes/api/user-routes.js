const router = require('express').Router()

const { getAllUsers, getUserById, createUser, authenticateLogin, lookupUserByToken } = require('../../controllers/user-controller')

router.route('/').get(getAllUsers)
router.route('/').post(createUser)

router.route("/auth").post(authenticateLogin)
router.route("/lookup").get(lookupUserByToken)

router.route('/:id').get(getUserById)

module.exports = router;