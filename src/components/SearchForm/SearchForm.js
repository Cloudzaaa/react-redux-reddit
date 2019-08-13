import React, {Component} from 'react';
import {Pane, SearchInput, Button} from 'evergreen-ui';

class SearchForm extends Component {
  state = {
    searchText: '',
  };

  onTyping = (e) => {
    this.setState({searchText: e.target.value})
  };

  render() {
    return (
      <Pane>
        <form onSubmit={(e) => this.props.onSend(e, this.state.searchText)}>
          <Pane display="flex">
            <SearchInput placeholder="Search..." onChange={this.onTyping}/>
            <Button marginRight={12} iconBefore="search">Search</Button>
          </Pane>
        </form>
      </Pane>
    );
  }
}

export default SearchForm;