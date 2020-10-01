import React from 'react';
import PropTypes from 'prop-types';

import MainScreen from '../main-screen/main-screen';

const App = (props) => {
  const {mainMovie} = props;

  return (
    <MainScreen mainMovie={mainMovie} />
  );
};

App.propTypes = {
  mainMovie: PropTypes.object.isRequired,
};

export default App;
