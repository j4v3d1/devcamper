const express = require('express');

const {
  getBootcamps,
  getBootcamp,
  createBootcamp,
  updateBootcamp,
  deleteBootcamp,
  getBootcampsInRadius,
} = require('../controllers/bootcamps');

//Include other Routers
const courseRouter = require('./courses');

const router = express.Router();

// Re-route to other Resource routers
router.use('/:bootcampId/courses', courseRouter);

router.route('/radius/:city/:distance').get(getBootcampsInRadius);

router.route('/').get(getBootcamps).post(createBootcamp);

router
  .route('/:id')
  .get(getBootcamp)
  .put(updateBootcamp)
  .delete(deleteBootcamp);

// router.get('/', getBootcamps);
// router.get('/:id', getBootcamp);
// router.post('/', createBootcamp);
// router.put('/:id', updateBootcamp);
// router.delete('/:id', deleteBootcamp);

module.exports = router;
