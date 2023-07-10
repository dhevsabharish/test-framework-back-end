const asyncHandler = require('express-async-handler');

const Module = require('../models/moduleModel');

// @desc  Get Modules
// @route GET /api/modules
const getModules = asyncHandler(async (req, res) => {
  const modules = await Module.find()
  res.status(200).json(modules);
})

// @desc  Set Module
// @route POST /api/modules
const setModule = asyncHandler(async (req, res) => {
  if (!req.body.name) {
    res.status(400)
    throw new Error('Please add a Name field')
  }

  const module = await Module.create({
    name: req.body.name
  })

  res.status(200).json(module);
})

// @desc  Update Module
// @route PUT /api/modules/:id
const updateModule = asyncHandler(async (req, res) => {
  const module = await Module.findById(req.params.id)

  if (!module) {
    res.status(400)
    throw new Error('Module not found')
  }

  const updatedModule = await Module.findByIdAndUpdate(req.params.id, req.body, { new: true })

  res.status(200).json(updatedModule);
})

// @desc  Delete Module
// @route Delete /api/modules/:id
const deleteModule = asyncHandler(async (req, res) => {
  const module = await Module.findById(req.params.id)
  if (!module) {
    res.status(400)
    throw new Error('Module not found')
  }
  await Module.findByIdAndDelete(req.params.id)
  res.status(200).json({ id: req.params.id });
})

module.exports = {
  getModules, setModule, updateModule, deleteModule
}