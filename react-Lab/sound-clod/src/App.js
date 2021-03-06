import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'


import Home from './containers/Home';
import Welcome from './containers/Welcome';


class App extends Component {

  render() {
    return (
		<Router>
			<div>
				<Route exact path="/" component={Welcome}/>
				<Route exact path="/home" component={Home}/>
			</div>
		</Router>
    );
  }
}

export default App;
