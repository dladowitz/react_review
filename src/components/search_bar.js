import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class SearchBar extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
        <div className="search-bar">
          <input onChange={event => this.props.onSearchTermChange(event.target.value)}/>
        </div>
    )
  }
}

export  default SearchBar;
