import React from 'react';

 let About = (props) => {
    return (
        <div className="about">
            <h1 className="text-center page-title">About</h1>
            <p>This is About page. I've built it for the COmplete React Web AppDeveloper Course.</p>
            <p>Here are some tools I used:</p>
            <ul>
                <li>
                    <a href="https://facebook.github.io/react" target="_blank">React</a>
                    - This is Javascript framework.
                </li>
                <li>
                    <a href="https://openweathermap.org" target="_blank">Open Weather App API</a>
                    - I used Weather Map to search for weather data city name.
                </li>
            </ul>
        </div>
    )
}

export default About;