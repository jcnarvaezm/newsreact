import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

let root = document.getElementById('root');
function renderToDOM() {
  if (root !== null) {
    ReactDOM.render(<App />, root);
  }
}
renderToDOM();
export { renderToDOM };
