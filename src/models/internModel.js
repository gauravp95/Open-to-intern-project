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
      unique: true,
      trim: true,
      lowercase: true,
      required: "Email address is required",
      validate: {
        validator: function (email) {
          return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
        }, message: 'Please fill a valid email address', isAsync: false
      }
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
