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
    const {isFetching, posts} = this.props;
    return (
      isFetching ? <SpinnerCentered /> : <Posts posts={posts}/>
    )
  }
}

const mapStateToProps = (state) => {
  const {selectedSubreddit, postsBySubreddit} = state;
  const {
    isFetching,
    lastUpdated,
    items: posts,
  } = postsBySubreddit[selectedSubreddit] || {
    isFetching: true,
    items: [],
  };

  return {
    selectedSubreddit,
    posts,
    isFetching,
    lastUpdated,
  }
};


export default connect(mapStateToProps)(PostsContainer);