// @desc GET all bootcamps
// @route GET /api/v1/bootcamps
// @access Public
exports.getBootcamps = (req, res, next) => {
  res.status(200).json({ success: true, message: 'Show all bootcamps' });
};

// @desc GET single bootcamp
// @route GET /api/v1/bootcamps/:id
// @access Public
exports.getBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, message: `Show single bootcamp ${req.params.id}` });
};

// @desc Create new bootcamp
// @route POST /api/v1/bootcamps/:id
// @access PRIVATE
exports.createBootcamp = (req, res, next) => {
  res.status(201).json({ success: true, message: 'Create new bootcamp' });
};

// @desc Update a bootcamp
// @route PUT /api/v1/bootcamps/:id
// @access PRIVATE
exports.updateBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, message: `Update a bootcamp ${req.params.id}` });
};

// @desc Delete bootcamp
// @route DELETE /api/v1/bootcamps/:id
// @access PRIVATE
exports.deleteBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, message: `Delete a bootcamp ${req.params.id}` });
};
