import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter, Route } from 'react-router-dom'
import { render } from 'react-dom'

import DetailsContainer from '../DetailsContainer'
import Routine from '../Routine'
import Sidebar from '../Sidebar'
import TunesContainer from '../TunesContainer'

const App = ({ pageTitle, sideBarTitle }) => (
  <BrowserRouter className>
    <div className='application'>
      <div id='top'>
        <h1>{pageTitle}</h1>
      </div>
      <Sidebar sideBarTitle={sideBarTitle} />
      <Route exact path='/' component={TunesContainer} />
      <Route path='/tunes/:id' component={DetailsContainer} />
      <Route path='/repertoire' component={TunesContainer} />
      <Route path='/routine' component={Routine} />
    </div>
  </BrowserRouter>
)

App.defaultProps = {
  pageTitle: 'Repertoire',
  sideBarTitle: 'TT'
}

App.propTypes = {
  pageTitle: PropTypes.string,
  sideBarTitle: PropTypes.string
}

render(<App />, document.getElementById('container'))
