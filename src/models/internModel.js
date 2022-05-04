const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const internModel = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: "Name of intern is required",
    },
    email: {
      type: String,
      trim: true,
      required: "Email Address is required",
    },
    mobile: {
      type: String,
      trim: true,
      unique: true,
    },
    collegeId: {
      type: ObjectId,
      ref: "College",
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Intern", internModel);
