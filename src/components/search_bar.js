import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class SearchBar extends Component {
  constructor(props) {
    super(props)

    this.state = { term: "Jello World" }
  }

  render() {
    return (
        <div>
          <input onChange={event => this.setState({ term: event.target.value })}/>
          Value of the Input: {this.state.term}
        </div>
    )
  }
}

export  default SearchBar;
