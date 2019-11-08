import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../styles/app.scss';
import Home from './pages/Home';

class App extends Component {
    render() {
        return (
            <div className="app-wrapper">
                <Home />
            </div>
        );
    }
}

const component = <App />;
const container = document.getElementById('app');

ReactDOM.render(component, container);
