import React, {useState} from 'react';

import {Movie, Review} from '../../prop-types';
import {getAllTabs, Tab} from '../../enum/tab';
import MoviePageReviewsTab from '../movie-page-reviews-tab/movie-page-reviews-tab';
import MoviePageDetailsTab from '../movie-page-details-tab/movie-page-details-tab';
import MoviePageOverviewTab from '../movie-page-overview-tab/movie-page-overview-tab';
import PropTypes from 'prop-types';

const getTabContent = (tab, movie, reviews) => {
  switch (tab) {
    case Tab.OVERVIEW:
      return <MoviePageOverviewTab movie={movie} />;
    case Tab.DETAILS:
      return <MoviePageDetailsTab movie={movie} />;
    case Tab.REVIEWS:
      return <MoviePageReviewsTab reviews={reviews} />;
    default:
      return null;
  }
};

const Tabs = (props) => {
  const {movie, reviews} = props;
  const [activeTab, setActiveTab] = useState(``);
  const tabs = getAllTabs();

  const handleTabClick = (e) => {
    e.preventDefault();
    setActiveTab(e.currentTarget.dataset.tabType);
  };

  return (
    <div className="movie-card__desc">
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          {tabs.map((tab, i) => (
            <li
              key={`${tab}-${i}`}
              className={`movie-nav__item ${tab === activeTab && `movie-nav__item--active`}`}
              onClick={handleTabClick}
              data-tab-type={tab}
            >
              <a href="#" className="movie-nav__link">{tab}</a>
            </li>
          ))}
        </ul>
      </nav>

      {getTabContent(activeTab, movie, reviews)}

    </div>
  );
};

Tabs.propTypes = {
  movie: Movie,
  reviews: PropTypes.arrayOf(Review).isRequired,
};

export default Tabs;
