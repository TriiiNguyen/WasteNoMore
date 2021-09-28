const router = require('express').Router();
const userRoutes = require('./userRoutes');
const projectRoutes = require('./Gardens');

router.use('/users', userRoutes);
router.use('/gardens', projectRoutes);

module.exports = router;
