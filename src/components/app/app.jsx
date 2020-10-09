import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import AddReview from '../add-review/add-review';
import MainPage from '../main-page/main-page';
import MoviePage from '../movie-page/movie-page';
import Player from '../player/player';
import SignIn from '../sign-in/sign-in';
import UserCatalog from '../user-catalog/user-catalog';
import {Movie} from '../../prop-types';

const App = (props) => {
  const {mainMovie, movies} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          render={({history}) => (
            <MainPage
              mainMovie={mainMovie}
              movies={movies}
              handleMovieCardClick={() => history.push(`/films/:id`)}
              handleMyListBtnClick={() => history.push(`/mylist`)}
              handlePlayBtnClick={() => history.push(`/player/:id`)}
            />
          )}
        />
        <Route exact path="/login">
          <SignIn />
        </Route>
        <Route
          exact
          path="/mylist"
          render={({history}) => (
            <UserCatalog
              movies={movies}
              handleMovieCardClick={() => history.push(`/films/:id`)}
            />
          )}
        />
        <Route
          exact
          path="/films/:id"
          render={({history}) => (
            <MoviePage
              movies={movies}
              movie={movies[0]}
              handleMovieCardClick={() => history.push(`/films/:id`)}
              handleMyListBtnClick={() => history.push(`/mylist`)}
              handlePlayBtnClick={() => history.push(`/player/:id`)}
            />
          )}
        />
        <Route exact path="/films/:id/review">
          <AddReview
            movie={movies[0]}
            onAddComment={() => {}}
          />
        </Route>
        <Route exact path="/player/:id">
          <Player movie={movies[0]} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  mainMovie: PropTypes.shape({
    name: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired,
  }).isRequired,
  movies: PropTypes.arrayOf(Movie).isRequired,
};

export default App;
