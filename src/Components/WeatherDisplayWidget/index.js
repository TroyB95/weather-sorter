import React from "react";
import styled from "styled-components";

import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";

import Cloudy from "../../Assets/Images/cloudy.svg";
import Haze from "../../Assets/Images/fog.svg";
import Rain from "../../Assets/Images/rain.svg";
import Storm from "../../Assets/Images/storm.svg";
import Sun from "../../Assets/Images/sun.svg";
import Wind from "../../Assets/Images/wind.svg";

const StyledWeatherIcon = styled.img`
  width: 175px;
`;

function WeatherDisplayWidget(props) {
  function weatherIcon(weatherCondition) {
    switch (weatherCondition) {
      case "Clouds":
        return Cloudy;
      case "Rain":
        return Rain;
      case "Thunderstorm":
        return Storm;
      case "Haze":
        return Haze;
      case "Clear":
        return Sun;
      default:
        console.log(weatherCondition);
        return "No Data";
    }
  }

  return (
    <Card className="weather-display__card" raised={true} bgcolor="secondary.main">
      <Grid container spacing={2}>
        <Grid item>
          <StyledWeatherIcon src={weatherIcon(props.weatherData[2])} />
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <h1>{props.weatherData[0]}</h1>
              <p>{Math.round(props.weatherData[1])} C</p>
              <p>{props.weatherData[3]}</p>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
}
export { WeatherDisplayWidget };
