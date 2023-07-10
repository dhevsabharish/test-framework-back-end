const mongoose = require('mongoose');

const moduleSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please enter the module name']
    },
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Module', moduleSchema);