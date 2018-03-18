import React, { Component } from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'

import SignUp from './signup'
import Login from './login'
import Home from './home'

class App extends Component {
    render() {
		return (
            <Router>
                <div>
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/signup' component={SignUp} />
                    <Route exact path='/' component={Home} />
                </div>
            </Router>
		);
    }
}

export default App;
