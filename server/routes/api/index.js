const router = require('express').Router();
const userRoutes = require('./user-routes');
const managerRoutes = require('./manager-routes');

router.use('/user', userRoutes);
router.use('/manager', managerRoutes);
module.exports = router;