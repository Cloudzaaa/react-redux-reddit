import React, {Component} from 'react';
import Posts from '../../components/Posts';
import {connect} from 'react-redux';
import fetchPostsIfNeeded from '../../actions'

class PostsContainer extends Component {
  state = {
    posts: [],
    subreddit: '',
  };

  componentDidMount() {
    this.props.fetchPostsIfNeeded(this.props.subreddit);
  }

}

const mapStateToProps = ({subreddit}) => {
  return {
    subreddit,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPosts: dispatch(fetchPostsIfNeeded)
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer);