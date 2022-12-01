const router = require('express').Router()

const { getAllShifts, getShiftByUser, createShift, authenticateLogin, lookupManagerByToken, updateShift } = require('../../controllers/shift-controller')

router.route('/').get(getAllShifts)
router.route('/:id').post(createShift)
router.route('/').put(updateShift)

router.route("/auth").post(authenticateLogin)
router.route("/lookup").get(lookupManagerByToken)

router.route('/:id').get(getShiftByUser)

module.exports = router;