import React from 'react';
import Nav from 'Nav';

let Main = (props) => {
    return (
        <div>
            <Nav/>
            <div className="row">
                <div className="columns medium-6 large-4 small-centered">
                    {/* Weather component */}
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default Main; 