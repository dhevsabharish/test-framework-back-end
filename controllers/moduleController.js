const asyncHandler = require('express-async-handler');

// @desc  Get Modules
// @route GET /api/modules
const getModules = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Get Modules' });
})

// @desc  Set Module
// @route POST /api/modules
const setModule = asyncHandler(async (req, res) => {
  if (!req.body.name) {
    res.status(400)
    throw new Error('Please add a Name field')
  }
  res.status(200).json({ message: 'Set Module' });
})

// @desc  Update Module
// @route PUT /api/modules/:id
const updateModule = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update Module ${req.params.id}` });
})

// @desc  Delete Module
// @route Delete /api/modules/:id
const deleteModule = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete Module ${req.params.id}` });
})

module.exports = {
  getModules, setModule, updateModule, deleteModule
}