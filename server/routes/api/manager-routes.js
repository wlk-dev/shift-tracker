const router = require('express').Router()

const { getAllManagers, getManagerById, createManager, authenticateLogin, lookupManagerByToken, updateManager } = require('../../controllers/user-controller')

router.route('/').get(getAllManagers)
router.route('/').post(createManager)
router.route('/').put(updateManager)

router.route("/auth").post(authenticateLogin)
router.route("/lookup").get(lookupManagerByToken)

router.route('/:id').get(getManagerById)

module.exports = router;