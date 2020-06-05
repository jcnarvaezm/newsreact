import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

function renderToDOM() {
  let root = document.getElementById('root');
  if (root !== null) {
    ReactDOM.render(<App />, root);
  }
}
renderToDOM();
export { renderToDOM };
