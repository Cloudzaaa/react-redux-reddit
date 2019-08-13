import React, {Component} from 'react';
import {Provider} from 'react-redux';
import store from '../../store';
import {Pane} from 'evergreen-ui';
import PostsContainer from '../../containers/PostsContainer'
import SearchFormContainer from '../SearchFormContainer/PostsContainer';
import ErrorBoundary from '../../components/ErrorBoundary';

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <ErrorBoundary>
          <Pane className="App">
            <SearchFormContainer/>
            <PostsContainer/>
          </Pane>
        </ErrorBoundary>
      </Provider>
    );
  }
}

export default App;
