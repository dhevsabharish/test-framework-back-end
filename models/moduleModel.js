const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const moduleURLSchema = new Schema({
  categoryNames: {
    type: [String],
    required: true
  },
  url: {
    type: String,
    required: true
  }
});

const testCaseFieldSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    enum: ['TextArea', 'Dropdown', 'TextField'],
    required: true
  },
  DropdownValues: {
    type: [String],
    required: false
  },
  required: {
    type: Boolean,
    required: true
  },
  description: {
    type: String,
    required: false
  }
});

const categorySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  values: {
    type: [String],
    required: true
  },
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
  testCaseFields: {
    type: [testCaseFieldSchema],
    required: false
  },
  moduleURLs: {
    type: [moduleURLSchema],
    required: false
  },
  categories: {
    type: [categorySchema],
    required: false
  },
  Application: {
    type: String,
    required: false
  }
});

module.exports = mongoose.model('Module', moduleSchema);