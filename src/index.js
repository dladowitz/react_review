import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

import EnvVar from '../.env.js'
const API_KEY = EnvVar.YOUTUBE_API_KEY

// --------- Fat Arrow Function --------
// These functions are the same
// function(argument){
//   console.log('Argument: ', argument);
// }
//
// (argument) => {
//   console.log('Argument: ', argument);
// }

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: []}

    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      // same as this.setState({ videos: videos})
      this.setState({ videos })

      console.log(this.state);
    })

  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoList />
      </div>
    )
  }

}

// Push component's HTML into the DOM.
ReactDOM.render(<App />, document.querySelector('.container'));
