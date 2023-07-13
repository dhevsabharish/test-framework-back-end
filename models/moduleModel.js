const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema();
categorySchema.add({
  name: String,
  values: [categorySchema]
});

const testCaseFieldSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    enum: ['string', 'number', 'boolean', 'date', 'array', 'object'],
    required: true
  },
  required: {
    type: Boolean,
    required: true
  },
  default: {
    type: String,
    required: false
  },
  description: {
    type: String,
    required: false
  }
});

const moduleSchema = new Schema({
  moduleName: {
    type: String,
    required: true
  },
  protocol: {
    type: String,
    required: true
  },
  moduleUrl: {
    type: String,
    required: true
  },
  testCaseFields: {
    type: [testCaseFieldSchema],
    required: true
  },
  categories: {
    type: [categorySchema],
    required: true
  }
});

module.exports = mongoose.model('Module', moduleSchema);