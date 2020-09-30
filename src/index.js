import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/app/app';

const MovieCharacteristics = {
  name: 'The Grand Budapest Hotel',
  genre: 'Drama',
  releaseDate: '2004',
};

ReactDOM.render(
  <App
    name={MovieCharacteristics.name}
    genre={MovieCharacteristics.genre}
    releaseDate={MovieCharacteristics.releaseDate}
  />,
  document.getElementById('root'),
);

