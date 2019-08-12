import React, {Component} from 'react';
import {Pane} from 'evergreen-ui';
import PropTypes from 'prop-types';

const Posts = (props) => {
  const posts = this.props.posts.map(({title}) => <div key={title}>{title}</div>);
  return (
    <Pane>
      {posts}
    </Pane>
  );
};

Posts.propTypes = {
  posts: PropTypes.object,
};

export default Posts;