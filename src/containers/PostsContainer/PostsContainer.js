import React, {Component} from 'react';
import Posts from '../../components/Posts';
import {connect} from 'react-redux';
import {fetchPostsIfNeeded} from '../../actions'
import SpinnerCentered from '../../components/SpinnerCentered';

class PostsContainer extends Component {

  componentDidMount() {
    const {dispatch, selectedSubreddit} = this.props;
    dispatch(fetchPostsIfNeeded(selectedSubreddit));
  }

  render() {
    const {isFetching, posts, didInvalidate} = this.props;
    const hasError = didInvalidate ? 'There were some errors...' : null;
    const content = isFetching ? <SpinnerCentered /> : <Posts posts={posts}/>;
    return hasError ? hasError : content;
  }
}

const mapStateToProps = (state) => {
  const {selectedSubreddit, postsBySubreddit} = state;
  const {
    isFetching,
    lastUpdated,
    items: posts,
    didInvalidate = false,
  } = postsBySubreddit[selectedSubreddit] || {
    isFetching: true,
    items: [],
    didInvalidate: false,
  };

  return {
    selectedSubreddit,
    posts,
    isFetching,
    lastUpdated,
  }
};


export default connect(mapStateToProps)(PostsContainer);