const Bootcamp = require('../models/Bootcamps');

// @desc GET all bootcamps
// @route GET /api/v1/bootcamps
// @access Public
exports.getBootcamps = async (req, res, next) => {
  try {
    const bootcamps = await Bootcamp.find();

    res
      .status(200)
      .json({ success: true, count: bootcamps.length, data: bootcamps });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// @desc GET single bootcamp
// @route GET /api/v1/bootcamps/:id
// @access Public
exports.getBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findById(req.params.id);
    if (!bootcamp) {
      return res
        .status(404)
        .json({ success: false, message: 'Bootcamp not found' });
    }

    res.status(200).json({
      success: true,
      data: bootcamp,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: 'Bootcamp not found' });
  }
};

// @desc Create new bootcamp
// @route POST /api/v1/bootcamps/:id
// @access PRIVATE
exports.createBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.create(req.body);
    res.status(201).json({
      success: true,
      data: bootcamp,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// @desc Update a bootcamp
// @route PUT /api/v1/bootcamps/:id
// @access PRIVATE
exports.updateBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!bootcamp) {
      return res
        .status(404)
        .json({ success: false, message: 'Bootcamp not found' });
    }

    return res.status(200).json({ success: true, data: bootcamp });
  } catch (error) {}
  res.status(400).json({ success: false, message: 'Bootcamp not found' });
};

// @desc Delete bootcamp
// @route DELETE /api/v1/bootcamps/:id
// @access PRIVATE
exports.deleteBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);

    if (!bootcamp) {
      return res
        .status(404)
        .json({ success: false, message: 'Bootcamp not found' });
    }

    return res.status(200).json({ success: true, data: {} });
  } catch (error) {}
  res.status(400).json({ success: false, message: 'Bootcamp not found' });
};
