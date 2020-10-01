import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app/app';

const MainMovieCharacteristics = {
  name: `The Grand Budapest Hotel`,
  genre: `Drama`,
  releaseDate: `2004`,
};

ReactDOM.render(
    <App
      mainMovie={MainMovieCharacteristics}
    />,
    document.getElementById(`root`)
);

