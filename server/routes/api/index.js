const router = require('express').Router();
const userRoutes = require('./user-routes');
const managerRoutes = require('./manager-routes');
const shiftRoutes = require('./shift-routes');

router.use('/user', userRoutes);
router.use('/manager', managerRoutes);
router.use('/shift', shiftRoutes);
module.exports = router;