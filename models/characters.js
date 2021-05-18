const mongoose = require("mongoose");
const crypto = require("crypto");

const { v1: uuidv1 } = require("uuid");

const characterSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      maxlength: 32,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Character", characterSchema);
