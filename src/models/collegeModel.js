const mongoose = require("mongoose");

const collegeModel = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: "Name is required",
    },
    fullName: {
      type: String,
      trim: true,
      required: "FullName is required",
    },
    logoLink: {
      type: String,
      trim: true,
      required: "Logo Link is required",
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('College', collegeModel);
