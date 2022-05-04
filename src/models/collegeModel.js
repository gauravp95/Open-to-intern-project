// const { links } = require("express/lib/response");
const mongoose = require("mongoose");
// const ObjectId = mongoose.Schema.Types.ObjectId;

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
