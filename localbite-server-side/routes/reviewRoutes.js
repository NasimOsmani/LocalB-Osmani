const express = require("express");
const router = express.Router();
const reviewController = require("../controllers/reviewController");

// new review
router.post("/", reviewController.createReview);

// GET reviews for a specific cook
router.get("/:cookName", reviewController.getReviewsByCook);

// UPDATE a review
router.put("/:id", reviewController.updateReview);

// DELETE
router.delete("/:id", reviewController.deleteReview);


module.exports = router;