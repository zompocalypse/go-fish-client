import React from 'react';
import ReactDOM from 'react-dom';
import GameTable from './GameTable';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<GameTable />, div);
  ReactDOM.unmountComponentAtNode(div);
});
