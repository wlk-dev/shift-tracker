const router = require('express').Router()

const { getAllUsers, getUserById, createUser, authenticateLogin, lookupUserByToken, updateUser } = require('../../controllers/user-controller')

router.route('/').get(getAllUsers)
router.route('/').post(createUser)
router.route('/:id').put(updateUser)

router.route("/auth").post(authenticateLogin)
router.route("/lookup").get(lookupUserByToken)

router.route('/:id').get(getUserById)

module.exports = router;