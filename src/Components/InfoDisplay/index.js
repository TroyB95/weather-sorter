import React from "react";
import styled from "styled-components";

import { WeatherDisplayWidget } from "../WeatherDisplayWidget";

function InfoDisplay(props) {
  let sortedData = [];

  (function findHighestTemp(weatherData) {
    sortedData = [...weatherData].sort((a, b) => {
      return b[1] - a[1];
    });
  })(props.weatherData);

  // return sortedData.map((cityData, i) => {

  //   return <p key={i}>{`${cityData[0]} ${Math.round(cityData[1])}`}</p>;
  // });

  return <WeatherDisplayWidget weatherData={sortedData.length > 10 ? sortedData[0] : ""} />;
}

export default InfoDisplay;
