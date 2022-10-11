const mongoose = require('mongoose');

const { Schema } = mongoose;

const collectionSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  }
});

const Collection = mongoose.model('Collection', collectionSchema);

module.exports = Collection;