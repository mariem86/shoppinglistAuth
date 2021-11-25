const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new Schema({
 user: {
        type: Schema.Types.ObjectId,
        ref: "user"
      },
  name: {
    type: String,
    required: true
  },

  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Item = mongoose.model("item",itemSchema );