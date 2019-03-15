import React from 'react';
let { Link } = require('react-router');

let Examples = (props) => {
    return (
        <div>
            <h1 className="text-centered">Examples</h1>
            <p>Here are few locations to try out</p>
            <ol>
                <li>
                    <Link to="/?location=Kiev">Kiev, Ukraine</Link>
                </li>
                <li>
                    <Link to="/?location=Rio">Rio, Brazil</Link>
                </li>
            </ol>
        </div>
    )
}

export default Examples;