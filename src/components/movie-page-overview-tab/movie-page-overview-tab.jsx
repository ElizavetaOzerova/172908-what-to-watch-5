import React from 'react';

import {Movie} from '../../prop-types';

const MoviePageOverviewTab = (props) => {
  const {
    movie: {
      ratingScore,
      ratingLevel,
      ratingCount,
      description,
      director,
      starring,
    },
  } = props;

  return (
    <>
      <div className="movie-rating">
        <div className="movie-rating__score">{ratingScore}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{ratingLevel}</span>
          <span className="movie-rating__count">{ratingCount} ratings</span>
        </p>
      </div>

      <div className="movie-card__text">
        <p>{description}</p>

        <p className="movie-card__director"><strong>Director: {director}</strong></p>

        <p className="movie-card__starring">
          <strong>Starring: {starring} and other</strong>
        </p>
      </div>
    </>
  );
};

MoviePageOverviewTab.propTypes = {
  movie: Movie,
};

export default MoviePageOverviewTab;
