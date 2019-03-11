import React from 'react';
import Nav from 'Nav';

let Main = (props) => {
    return (
        <div>
            <Nav/>
            {/* Weather component */}
            {props.children}
        </div>
    )
}

export default Main; 