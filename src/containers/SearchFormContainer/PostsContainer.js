import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPostsIfNeeded, selectSubredit} from '../../actions'
import SearchForm from '../../components/SearchForm';

class SearchFormContainer extends Component {

  onSearchSubmit = (e, subreddit) => {
    const {dispatch} = this.props;
    e.preventDefault();
    console.log(subreddit);
    dispatch(fetchPostsIfNeeded(subreddit));
  };

  render() {
    return <SearchForm
      posts={this.props.posts}
      onSend={this.onSearchSubmit}
    />
  }
}

export default connect()(SearchFormContainer);