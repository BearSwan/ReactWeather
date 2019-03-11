import React from 'react';
import { Link, IndexLink } from 'react-router';

let Nav = (props) => {
    return (
        <div>
            <h2>Nav component</h2>
            <IndexLink activeClassName='active' to='/'>Get weather</IndexLink>
            <IndexLink activeClassName='active' to='/about'>About</IndexLink>
            <IndexLink activeClassName='active' to='/examples'>Examples</IndexLink>
        </div>
    )
}

// module.exports = Nav;
export default Nav;