export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT';
export const selectSubredit = (subreddit) => {
  return {
    type: SELECT_SUBREDDIT,
    subreddit,
  };
};

export const INVALIDATE_SUBREDDIT = 'INVALIDATE_SUBREDDIT';
export const invalidateSubreddit = (subreddit) => {
  return {
    type: INVALIDATE_SUBREDDIT,
    subreddit,
  }
};

export const REQUEST_POSTS = 'REQUEST_POSTS';

export const requestPosts = (subreddit) => {
  return {
    type: REQUEST_POSTS,
    subreddit,
  }
};

export const RECIEVE_POSTS = 'RECIEVE_POSTS';
export const recievePosts = (subreddit, json) => {
  return {
    type: RECIEVE_POSTS,
    subreddit,
    posts: json.data.children.map(child => child.data),
    recieveAt: Date.now(),
  }
};

export const fetchPosts = (subreddit) => {
  return (dispatch) => {
    dispatch(requestPosts(subreddit));
    return fetch(`http://www.reddit.com/r/${subreddit}.json`)
      .then(response => response.json())
      .then(json => dispatch(recievePosts(subreddit, json)),
      )
  }
};

export const shouldFetchPosts = (state, subreddit) => {
  const posts = state.postsBySubreddit[subreddit];
  if(!posts) {
    return true
  }

  if(posts.isFetching) {
    return false
  }

  return posts.didInvalidate
};

export const fetchPostsIfNeeded = (subreddit) => {
  return (dispatch, getState) => {
    if(shouldFetchPosts(getState(), subreddit)) {
      return dispatch(fetchPosts(subreddit))
    }
    return Promise.resolve();
  }
};


