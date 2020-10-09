import PropTypes from 'prop-types';

export const Movie = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
  ratingScore: PropTypes.string.isRequired,
  ratingLevel: PropTypes.string.isRequired,
  ratingCount: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  director: PropTypes.string.isRequired,
  starring: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
}).isRequired;
