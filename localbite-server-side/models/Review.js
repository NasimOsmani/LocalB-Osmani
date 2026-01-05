const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    cookName: { type: String, required: true },
    user: { type: String, required: true },
    
    // 1. Make sure this section exists
    email: { type: String, required: false },
    
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
    }, 
    
    { strict: false });

module.exports = mongoose.model('Review', reviewSchema);