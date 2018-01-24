import React, { Component} from 'react';
import ReactDOM   from 'react-dom';
import YTSearch   from 'youtube-api-search';

import SearchBar   from './components/search_bar';
import VideoList   from './components/video_list';
import VideoDetail from './components/video_detail';

import EnvVar      from '../.env.js'
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

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('Surfboards');
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      // same as this.setState({ videos: videos})
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
       })
    })
  }

  render() {
    return (
      <div>
        <SearchBar onSearchTermChange={(term) => this.videoSearch(term)} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={ (selectedVideo) => this.setState({selectedVideo: selectedVideo}) }
          videos={this.state.videos}
        />
      </div>
    )
  }

}

// Push component's HTML into the DOM.
ReactDOM.render(<App />, document.querySelector('.container'));
