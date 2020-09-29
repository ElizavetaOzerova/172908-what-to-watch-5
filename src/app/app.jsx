import React from 'react';
import MainScreen from '../main-screen/main-screen';

const App = (props) => {
  const {
    name,
    genre,
    releaseDate
  } = props;

  return (
    <MainScreen
      name={name}
      genre={genre}
      releaseDate={releaseDate}
    />
  );
};

export default App;
