import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router";
import { AuthContext } from "../../contexts/AuthContext";

const CooksReview = () => {
  const { cookName } = useParams();
  const { user } = useContext(AuthContext);

  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  
  const [editingId, setEditingId] = useState(null);

  // Load reviews
  useEffect(() => {
    if (!cookName) return;
    fetch(`http://localhost:5000/api/reviews/${encodeURIComponent(cookName)}`)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) setReviews(data);
      })
      .catch((err) => console.error(err));
  }, [cookName]);

  const getDisplayName = (currentUser) => {
    if (!currentUser) return "Guest";
    if (currentUser.displayName) return currentUser.displayName;
    return currentUser.email ? currentUser.email.split('@')[0] : "Guest";
  };

  const calculateAverage = () => {
    if (reviews.length === 0) return 0;
    const total = reviews.reduce((sum, r) => sum + (Number(r.rating) || 0), 0);
    return (total / reviews.length).toFixed(1);
  };

  // dlt
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this review?")) return;

    try {
      const res = await fetch(`http://localhost:5000/api/reviews/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        setReviews(reviews.filter((r) => r._id !== id));
        if (editingId === id) {
          setEditingId(null);
          setComment("");
          setRating(0);
        }
      }
    } catch (err) {
      console.error("Failed to delete", err);
    }
  };

  //start edit
  const handleEditClick = (review) => {
    setEditingId(review._id);
    setRating(review.rating);
    setComment(review.comment);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  //cancel edit
  const handleCancelEdit = () => {
    setEditingId(null);
    setRating(0);
    setComment("");
  };

  // submit button
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (rating === 0 || !comment.trim()) {
      alert("Please provide a rating and a comment.");
      return;
    }

    const displayUser = getDisplayName(user);
    
    const reviewData = {
      cookName: decodeURIComponent(cookName),
      user: displayUser,
      email: user?.email,
      rating: Number(rating),
      comment: comment,
    };

    try {
      let res;
      
      if (editingId) {
        // edit
        res = await fetch(`http://localhost:5000/api/reviews/${editingId}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(reviewData),
        });
      } else {
        //new 
        res = await fetch("http://localhost:5000/api/reviews", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(reviewData),
        });
      }

      if (res.ok) {
        const savedReview = await res.json();
        
        if (editingId) {
          setReviews(reviews.map(r => r._id === editingId ? savedReview : r));
          setEditingId(null);
        } else {
          setReviews([savedReview, ...reviews]);
        }
        
        setRating(0);
        setComment("");
      }
    } catch (err) {
      console.error("Submission error:", err);
    }
  };

  return (
    <div className="p-6 max-w-2xl mx-auto text-black bg-white min-h-screen">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 border-b pb-4">
        <div>
          <h1 className="text-3xl font-bold">
            Reviews for <span className="text-orange-600">{decodeURIComponent(cookName || "Cook")}</span>
          </h1>
        </div>
        <div className="mt-4 md:mt-0 bg-orange-50 p-3 rounded-lg border border-orange-100 text-center min-w-[120px]">
          <span className="block text-3xl font-bold text-orange-600">
            {calculateAverage()} <span className="text-lg text-gray-400">/ 5</span>
          </span>
          <span className="text-sm text-gray-600 font-medium">
            Based on {reviews.length} reviews
          </span>
        </div>
      </div>

      {/* Form Section */}
      <form onSubmit={handleSubmit} className={`mb-8 p-6 rounded-xl border shadow-sm transition-colors ${editingId ? "bg-orange-50 border-orange-200" : "bg-gray-50 border-gray-200"}`}>
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-lg font-semibold">
            {editingId ? "Edit Your Review" : "Leave a Rating"} 
            <span className="text-sm font-normal text-gray-500 ml-2">
               as {getDisplayName(user)}
            </span>
          </h2>
          {editingId && (
            <button 
              type="button" 
              onClick={handleCancelEdit}
              className="text-sm text-red-500 hover:text-red-700 font-bold"
            >
              Cancel Edit
            </button>
          )}
        </div>
        
        <select 
          value={rating} 
          onChange={(e) => setRating(Number(e.target.value))}
          className="w-full mb-3 p-3 border rounded-lg bg-white text-black"
        >
          <option value={0}>Select Stars</option>
          {[5, 4, 3, 2, 1].map(n => <option key={n} value={n}>{n} Stars</option>)}
        </select>
        
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="How was your meal?"
          className="w-full mb-3 p-3 border rounded-lg bg-white text-black"
          rows="4"
          required
        />
        
        <button type="submit" className={`w-full font-bold p-3 rounded-lg transition shadow-md text-white ${editingId ? "bg-green-600 hover:bg-green-700" : "bg-orange-500 hover:bg-orange-600"}`}>
          {editingId ? "Update Review" : "Submit Review"}
        </button>
      </form>

      {/* Review List */}
      <div className="space-y-4">
        {reviews.map((r, index) => {
            const isOwner = true; 
            
            return (
              <div key={r._id || index} className={`p-4 border rounded-lg shadow-sm bg-white hover:shadow-md transition relative group ${editingId === r._id ? 'ring-2 ring-orange-400' : ''}`}>
                
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold text-gray-800">{r.user}</span>
                  <span className="text-orange-500 font-bold">
                    {"★".repeat(r.rating)}{"☆".repeat(5 - r.rating)}
                  </span>
                </div>
                
                <p className="text-gray-700 whitespace-pre-wrap">{r.comment}</p>

                {/* ACTION BUTTONS */}
                {isOwner && (
                  <div className="mt-3 flex gap-3 text-sm font-medium pt-2 border-t border-gray-100">
                    <button 
                      onClick={() => handleEditClick(r)}
                      className="text-blue-600 hover:text-blue-800 flex items-center gap-1"
                    >
                      ✎ Edit
                    </button>
                    <button 
                      onClick={() => handleDelete(r._id)}
                      className="text-red-600 hover:text-red-800 flex items-center gap-1"
                    >
                      🗑 Delete
                    </button>
                  </div>
                )}
              </div>
            );
        })}
      </div>
    </div>
  );
};

export default CooksReview;