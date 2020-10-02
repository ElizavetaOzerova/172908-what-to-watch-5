import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import AddReview from '../add-review/add-review';
import Auth from '../auth/auth';
import MainPage from '../main-page/main-page';
import MoviePage from '../movie-page/movie-page';
import Player from '../player/player';
import UserCatalog from '../user-catalog/user-catalog';

const App = (props) => {
  const {mainMovie} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <MainPage mainMovie={mainMovie} />
        </Route>
        <Route exact path='/login'>
          <Auth />
        </Route>
        <Route exact path='/mylist'>
          <UserCatalog />
        </Route>
        <Route exact path='/films/:id'>
          <MoviePage />
        </Route>
        <Route exact path='/films/:id/review'>
          <AddReview />
        </Route>
        <Route exact path='/player/:id'>
          <Player />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  mainMovie: PropTypes.object.isRequired,
};

export default App;
