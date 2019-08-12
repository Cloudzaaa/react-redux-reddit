import React, {Component} from 'react';
import { Provider } from 'react-redux';
import store from '../../store';
import { Pane } from 'evergreen-ui';
import Posts from '../../components/Posts'

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Pane className="App">
          <Posts />
        </Pane>
      </Provider>
    );
  }
}

export default App;
