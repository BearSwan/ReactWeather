import React from 'react';
import WeatherForm from 'WeatherForm';
import WeatherMessage from 'WeatherMessage';
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
    getInitialState: function () {
        return {
            isLoading: false
        }
    },
    handleSearch: function (location) {
        let that = this;

        this.setState({
            isLoading: true
        });

        openWeatherMap.getTemp(location).then(function (temp) {
            that.setState({
                location: location,
                temp: temp,
                isLoading: false
            })
        }, function (errorMessage) {
            that.setState({
                isLoading: false
            })
            alert(errorMessage);
        });
    },
    render: function () {
        var {isLoading, temp, location} = this.state;

        function renderMessage() {
            if (isLoading) {
                return <h3>Fetching weather....</h3>
            } else if (temp && location) {
                return <WeatherMessage temp={temp} location={location}/>;
            } 
        }

        return (
            <div>
                <h3 className="page-title">Weather component</h3>
                <WeatherForm onSearch={this.handleSearch}/>
                {renderMessage()}
            </div>
        );
    }
});

export default Weather;