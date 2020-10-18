import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Movie} from '../../prop-types';

import SmallMovieCard from '../small-movie-card/small-movie-card';

class MoviesList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {activeMovieID: 0};
  }

  render() {
    const {movies, handleMovieCardClick} = this.props;
    const {activeMovieID} = this.state;

    return (
      <div className="catalog__movies-list">
        {movies.map((movie) =>
          <SmallMovieCard
            key={movie.id}
            movie={movie}
            handleMovieCardMouseOver={() => {
              this.setState({activeMovieID: movie.id});
            }}
            handleMovieCardMouseOut={() => {
              this.setState({activeMovieID: -1});
            }}
            handleMovieCardClick={handleMovieCardClick}
            isActive={ movie.id === activeMovieID }
          />
        )}
      </div>
    );
  }
}

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(Movie).isRequired,
  handleMovieCardClick: PropTypes.func.isRequired,
};

export default MoviesList;
