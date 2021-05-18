const express = require("express")
const router = express.Router();
const characterController = require("../controllers/characters");

// Matches with "/api/note"
router
  .route("/")
  .get(characterController.findAll)
  .post(characterController.create);

  module.exports = router;