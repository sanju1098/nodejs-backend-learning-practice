const express = require("express");

const upload = require("../middleware/upload.middleware");
const uploadController = require("../controllers/upload.controller");

const router = express.Router();

router.post("/single", upload.single("image"), uploadController.uploadSingle);

router.post(
  "/multiple",
  upload.array("images", 5),
  uploadController.uploadMultiple,
);

module.exports = router;
