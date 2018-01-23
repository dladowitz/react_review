import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = process.env.YOUTUBE_API_KEY

// Create a new component that produces html.
const App = () => {

  return <SearchBar />;
}

// Push component's HTML into the DOM.

ReactDOM.render(<App />, document.querySelector('.container'));
