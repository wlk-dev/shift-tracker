const { Schema, model } = require("mongoose");

const ShiftSchema = new Schema({
  startTime: { type: String },
  endTime: { type: String },
  user_id: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  fname : {type : String}
});

const Shift = model("Shift", ShiftSchema);
module.exports = Shift;