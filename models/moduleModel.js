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
  required: {
    type: Boolean,
    required: true
  },
  description: {
    type: String,
    required: false
  }
});

const subcategorySchema = new Schema({
  subcatName: {
    type: String,
    required: true
  },
  parentCatVal: {
    type: String,
    required: true
  },
  configurations: {
    type: [String],
    required: true
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
  subcategories: {
    type: [subcategorySchema],
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