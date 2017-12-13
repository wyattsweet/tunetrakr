// Vendor
import React from 'react';
import { render } from 'react-dom';

// Internal
import Header from '../Header';
import preload from '../../preload.json';
import ItemsList from '../ItemsList';

// Import base styles
import '../styles/base.css';

const App = () => {
  return (
    <div>
      <Header />
      <ItemsList tunes={preload} />
    </div>
  );
};

render(<App />, document.getElementById('container'));
