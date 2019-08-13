import React from 'react';
import {Pane, Paragraph} from 'evergreen-ui';
import PropTypes from 'prop-types';

const Posts = (props) => {
  const posts = props.posts.map(({title}) => <Paragraph size={300} marginTop="default" key={title}>{title}</Paragraph>);
  return (
    <Pane>
      {posts}
    </Pane>
  );
};

Posts.propTypes = {
  posts: PropTypes.array,
};

export default Posts;