import React from 'react';
import {Link} from 'react-router-dom';

import PropTypes from 'prop-types';
import {Movie} from '../../prop-types';
import VideoPlayer from '../video-player/video-player';

const SmallMovieCard = (props) => {
  const {
    movie: {
      name,
      poster,
      src,
    },
    handleMovieCardMouseOver,
    handleMovieCardMouseOut,
    handleMovieCardClick,
    isActive,
  } = props;

  return (
    <article
      onClick={handleMovieCardClick}
      onMouseOver={handleMovieCardMouseOver}
      onMouseOut={handleMovieCardMouseOut}
      className="small-movie-card catalog__movies-card"
    >
      <div className="small-movie-card__image">
        <VideoPlayer
          isActive={isActive}
          poster={poster}
          src={src}
        />
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
  handleMovieCardMouseOut: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
};

export default SmallMovieCard;
