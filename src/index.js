import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app/app';
import films from './mocks/films';

const MainMovieCharacteristics = {
  name: `The Grand Budapest Hotel`,
  genre: `Drama`,
  releaseDate: `2004`,
};

ReactDOM.render(
    <App
      mainMovie={MainMovieCharacteristics}
      films={films}
    />,
    document.getElementById(`root`)
);

