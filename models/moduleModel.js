const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema();
categorySchema.add({
  name: String,
  values: [categorySchema]
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
  categories: {
    type: [categorySchema],
    required: true
  }
});

module.exports = mongoose.model('Category', categorySchema);
module.exports = mongoose.model('Module', moduleSchema);