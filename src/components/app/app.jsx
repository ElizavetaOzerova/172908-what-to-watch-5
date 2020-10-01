import React from 'react';
import PropTypes from 'prop-types';

import MainPage from '../main-page/main-page';

const App = (props) => {
  const {mainMovie} = props;

  return (
    <MainPage mainMovie={mainMovie} />
  );
};

App.propTypes = {
  mainMovie: PropTypes.object.isRequired,
};

export default App;
