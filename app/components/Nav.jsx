import React from 'react';
import { Link, IndexLink } from 'react-router';

let Nav = React.createClass({
    onSearch: function (e) {
        e.preventDefault();
        alert("Not yet done");
    },
    render: function () {
        return (
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text">
                            React Weather App
                        </li>
                        <li>
                            <IndexLink activeClassName='active' to='/'>Get weather</IndexLink>
                        </li>
                        <li>
                            <IndexLink activeClassName='active' to='/about'>About</IndexLink>
                        </li>
                        <li>
                            <IndexLink activeClassName='active' to='/examples'>Examples</IndexLink>
                        </li>
                    </ul>
                </div>
                <div className="top-bar-right">
                    <form onSubmit={this.onSearch}>
                        <ul className="menu">
                            <li>
                                <input type="search" placeholder="Search weather"/>
                            </li>
                            <li>
                                <input className="button" type="submit" value="Get weather"/>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        )
    }
})

// module.exports = Nav;
export default Nav;