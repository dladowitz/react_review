import React from 'react';
import ReactDOM from 'react-dom';


// Create a new component that produces html.
const App = () => {
  return <div>Jello World!</div>;
}

// Push component's HTML into the DOM.

ReactDOM.render(<App />, document.querySelector('.container'));
