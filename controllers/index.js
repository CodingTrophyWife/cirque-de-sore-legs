const router = require('express').Router();
const apiRoutes = require('./api');
const frontEndRoutes = require("./frontEndRoutes")

router.use('/api', apiRoutes);
router.use(frontEndRoutes);


module.exports = router;