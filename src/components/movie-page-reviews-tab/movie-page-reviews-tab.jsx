import React from 'react';

import PropTypes from 'prop-types';
import {Review} from '../../prop-types';

const MoviePageReviewsTab = (props) => {
  const {reviews} = props;

  return (
    <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">
        {reviews.map((review, i) => (
          <div key={i} className="review">
            <blockquote className="review__quote">
              <p className="review__text">{review.text}</p>

              <footer className="review__details">
                <cite className="review__author">{review.userName}</cite>
                <time className="review__date" dateTime="2016-12-24">{review.date}</time>
              </footer>
            </blockquote>

            <div className="review__rating">{review.movieRating}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

MoviePageReviewsTab.propTypes = {
  reviews: PropTypes.arrayOf(Review).isRequired,
};

export default MoviePageReviewsTab;
