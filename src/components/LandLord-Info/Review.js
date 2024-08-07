import React from 'react';
import './Review.css';

function Review({ review }) {
  return (
    <div className="review">
      <div className="review-rating">
        <div className="ratings">
          <div className="rating">
            <div className="rating-label">QUALITY</div>
            <div className="rating-value">{review.quality.toFixed(1)}</div>
          </div>
          <div className="rating">
            <div className="rating-label">RESPONSIVENESS</div>
            <div className="rating-value">{review.responsiveness.toFixed(1)}</div>
          </div>
        </div>
      </div>
      <div className="review-content">
        <div className="review-header">
          <div className="review-details">
            <div className="review-header-content">
              <h3>{review.property}</h3>
              <div className="details">
                <span>Rent: {review.rent}</span>
                <span>Pets Allowed: {review.pets ? 'Yes' : 'No'}</span>
                <span>Would Rent Again: {review.rentAgain ? 'Yes' : 'No'}</span>
                <span>Bedrooms: {review.bedrooms}</span>
                <span>Bathrooms: {review.bathrooms}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="review-body">
          <p>{review.comments}</p>
        </div>
      </div>
      <div className="review-date">{review.date}</div>
    </div>
  );
}

export default Review;


