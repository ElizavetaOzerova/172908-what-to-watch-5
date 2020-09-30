import React from 'react';
import PropTypes from 'prop-types';

import MainScreen from '../main-screen/main-screen';

const App = (props) => {
  const {
    mainMovieName,
    mainMovieGenre,
    mainMovieReleaseDate,
  } = props;

  return (
    <MainScreen
      mainMovieName={mainMovieName}
      mainMovieGenre={mainMovieGenre}
      mainMovieReleaseDate={mainMovieReleaseDate}
    />
  );
};

App.propTypes = {
  mainMovieName: PropTypes.string.isRequired,
  mainMovieGenre: PropTypes.string.isRequired,
  mainMovieReleaseDate: PropTypes.string.isRequired,
};

export default App;
