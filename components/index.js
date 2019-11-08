import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../styles/app.scss';
// import Home from './pages/Home';
import EventForm from './pages/event-form';
import Events from './pages/events';
import {
    HashRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/events/:id" component={EventForm} />
                    <Route path="/" exact>
                        <Events/>
                    </Route>
                </Switch>
            </Router>
        );
    }
}

const component = <App />;
const container = document.getElementById('app');

ReactDOM.render(component, container);
