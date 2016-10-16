import {Router, Route} from 'react-router';
import React, {Component} from 'react';
import {browserHistory} from 'react-router'
import Routes from '../common/routes';

class MyRouter extends Component {
    render() {
        return (
            <Router history={browserHistory}>
                {Routes}
            </Router>
        );
    }
}

export default MyRouter;