import React from 'react';

let WeatherMessage = ({temp, location }) => {
    // let {temp, location} = props;

    return (
        <div className="weather-message">
            <p>It's {temp} in {location}!</p>
        </div>
    );
}

export default WeatherMessage;