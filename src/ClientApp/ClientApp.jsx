// Vendor
import React from 'react';
import { render } from 'react-dom';

// Internal
import Header from '../Header';
import Log from '../Log';
import preload from '../../preload.json';
import TuneList from '../TuneList';
import VerticalColumn from '../VerticalColumn';

// Styles
import '../styles/base.css';

const App = () => {
  return (
    <div>
      <Header />
      <div className="listWrapper">
        <VerticalColumn>
          <TuneList title="Active Tunes" tunes={preload} />
        </VerticalColumn>
        <VerticalColumn>
          <TuneList title="Backlog" tunes={preload} />
        </VerticalColumn>
        <VerticalColumn>
          <Log />
        </VerticalColumn>
      </div>
    </div>
  );
};

render(<App />, document.getElementById('container'));
