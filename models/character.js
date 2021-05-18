const mongoose = require("mongoose");
const crypto = require("crypto");

const { v1: uuidv1 } = require("uuid");

const characterSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      default: uuidv1(),
    },
    name: {
      type: String,
      trim: true,
      required: true,
      maxlength: 32,
    },
    class: { 
      type: String,
      required: true,
    },
    race: { 
      type: String,
      required: true,
    },
    gender: { 
      type: String,
      required: true,
    },
    backstory: {
      type: String,
    },
    level: {
      type: Number,
    },
    image: {
      type: String,
    },
    stats:{
      type: Object,
    },
    active: {
      type: Boolean,
    } 
  },
  { timestamps: true }
);

module.exports = mongoose.model("Character", characterSchema);
