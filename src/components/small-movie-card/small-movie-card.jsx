import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {Movie} from '../../prop-types';

const SmallMovieCard = (props) => {
  const {
    movie: {
      name,
      poster,
    },
    handleMovieCardMouseOver,
    handleMovieCardClick,
  } = props;

  return (
    <article
      onClick={handleMovieCardClick}
      onMouseOver={handleMovieCardMouseOver}
      className="small-movie-card catalog__movies-card"
    >
      <div className="small-movie-card__image">
        <img src={poster} alt={name} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <Link to="/films/:id" className="small-movie-card__link">
          {name}
        </Link>
      </h3>
    </article>
  );
};

SmallMovieCard.propTypes = {
  movie: Movie,
  handleMovieCardClick: PropTypes.func.isRequired,
  handleMovieCardMouseOver: PropTypes.func.isRequired,
};

export default SmallMovieCard;
