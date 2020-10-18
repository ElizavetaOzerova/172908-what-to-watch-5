import React, {Component, createRef} from 'react';
import PropTypes from 'prop-types';

export default class VideoPlayer extends Component {
  constructor(props) {
    super(props);

    this.videoRef = createRef();
  }

  componentDidMount() {
    const {src} = this.props;
    const video = this.videoRef.current;
    video.src = src;

    video.oncanplaythrough = () => (
      this.setState({
        isLoading: false,
      })
    );
  }

  componentWillUnmount() {
    const video = this.videoRef.current;
    video.oncanplaythrough = null;
  }

  render() {
    const {isActive, poster} = this.props;

    return (
      <video
        ref={this.videoRef}
        poster={poster}
        autoPlay={isActive}
        width="280"
        height="175"
        muted
      />
    );
  }

  componentDidUpdate() {
    const video = this.videoRef.current;

    if (this.props.isActive) {
      video.play();
    } else {
      video.load();
    }
  }
}

VideoPlayer.propTypes = {
  isActive: PropTypes.bool.isRequired,
  poster: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};
