const mongoose = require("mongoose");
const quoteSchema = mongoose.Schema({
  quote: {
    type: String,
    required: true,
  },

  autor: {
    type: String,
    required: true,
  },

  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const quoteModel = mongoose.model("quoteApi", quoteSchema);
module.exports = quoteModel;
