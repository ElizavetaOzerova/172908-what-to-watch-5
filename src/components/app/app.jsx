import React from 'react';
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

export default App;
