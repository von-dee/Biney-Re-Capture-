const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const validationSchema = new Schema({
  instruction: {
    type: String,
    required: true,
    trim: true
  },
  validation: {
    type: [String],
    required: true
  }
});

const validationModel = mongoose.model("validation", validationSchema);
module.exports = validationModel;
