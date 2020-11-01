import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app/app';
import movies from './mocks/films';
import reviews from "./mocks/reviews";

const MainMovieCharacteristics = {
  name: `The Grand Budapest Hotel`,
  genre: `Drama`,
  releaseDate: `2004`,
};

ReactDOM.render(
    <App
      mainMovie={MainMovieCharacteristics}
      movies={movies}
      reviews={reviews}
    />,
    document.getElementById(`root`)
);

