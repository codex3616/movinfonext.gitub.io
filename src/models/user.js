const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = mongoose.Schema(
  {
    UserName: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error("Invalid email...");
        }
      },
      required: true,
      unique: true,
    },
    phone: {
      type: Number,
      min: 10,
      required: true,
      unique: true,
    },
    message: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      Default: Date.now,
    },
  },
  {
    timestamp: true,
  }
);

const UserData =
  mongoose.models.UserData || mongoose.model("userData", userSchema);

module.exports = UserData;
