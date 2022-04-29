const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const count = new Schema({
  count: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Count", count);
