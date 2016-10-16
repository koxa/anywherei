import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';

class Menu extends Component {
    render() {
        return (
            <nav id="menu">
                <div className="pageLinks">
                    <Link className="link" activeClassName="active" to="/">Home</Link>
                    <Link className="link" activeClassName="active" to="/wizard">Wizard</Link>
                    <Link className="link" activeClassName="active" to="/queries">Queries</Link>
                    <Link className="link" activeClassName="active" to="/search">Search</Link>
                    <Link className="link" activeClassName="active" to="/admin">Admin</Link>
                </div>
            </nav>
        )
    }
}

export default Menu;