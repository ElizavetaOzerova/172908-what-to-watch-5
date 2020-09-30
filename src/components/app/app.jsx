import React from 'react';
import MainScreen from '../main-screen/main-screen';

const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const {mainMovieName, mainMovieGenre, mainMovieReleaseDate} = props;

  return (
    <MainScreen
      mainMovieName={mainMovieName}
      mainMovieGenre={mainMovieGenre}
      mainMovieReleaseDate={mainMovieReleaseDate}
    />
  );
};

export default App;
