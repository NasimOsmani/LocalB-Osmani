const Review = require("../models/Review");

// Get reviews
exports.getReviewsByCook = async (req, res) => {
  try {
    const cookName = decodeURIComponent(req.params.cookName);
    const reviews = await Review.find({ 
      cookName: { $regex: new RegExp(`^${cookName}$`, "i") } 
    }).sort({ createdAt: -1 });

    res.status(200).json(reviews);
  } catch (error) {
    console.error("Get Error:", error);
    res.status(500).json({ message: "Error fetching reviews" });
  }
};
//review
exports.createReview = async (req, res) => {
  try {
    // get email
    const { cookName, user, email, rating, comment } = req.body;

    // code terminal
    console.log("Creating Review for:", user);
    console.log("Email Received:", email); 
    // -----------

    if (!cookName || !rating || !comment) {
      return res.status(400).json({ message: "Missing fields" });
    }

    const newReview = await Review.create({
      cookName,
      user: user || "Guest",
      email: email, 
      rating: Number(rating),
      comment
    });

    res.status(201).json(newReview);
  } catch (error) {
    console.error("Save Error:", error);
    res.status(500).json({ message: "Error saving review" });
  }
};

// Update
exports.updateReview = async (req, res) => {
  try {
    const { id } = req.params;
    const { rating, comment } = req.body;

    const updatedReview = await Review.findByIdAndUpdate(
      id,
      { rating, comment },
      { new: true }
    );
    res.status(200).json(updatedReview);
  } catch (error) {
    res.status(500).json({ message: "Error updating review", error });
  }
};

//Delete Review
exports.deleteReview = async (req, res) => {
  try {
    const { id } = req.params;
    await Review.findByIdAndDelete(id);
    res.status(200).json({ message: "Deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting review", error });
  }
};