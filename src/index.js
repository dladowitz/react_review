import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import EnvVar from '../.env.js'
import SearchBar from './components/search_bar';


const API_KEY = EnvVar.YOUTUBE_API_KEY


YTSearch({key: API_KEY, term: 'surfboards'}, function(data) {
  console.log(data);
})

// Create a new component that produces html.
const App = () => {

  return <SearchBar />;
}

// Push component's HTML into the DOM.

ReactDOM.render(<App />, document.querySelector('.container'));
