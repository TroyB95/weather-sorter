import React from "react";

import { WeatherDisplayWidget } from "../WeatherDisplayWidget";

function InfoDisplay(props) {
  let sortedData = [];

  function findHighestTemp(weatherData) {
    sortedData = [...weatherData].sort((a, b) => {
      return b[1] - a[1];
    });
  }

  function findLowestTemp(weatherData) {
    sortedData = [...weatherData].sort((a, b) => {
      return a[1] - b[1];
    });
  }

  // Sort data based on user input
  switch (props.dataset) {
    case "warmest":
      findHighestTemp(props.weatherData);
      break;
    case "coldest":
      findLowestTemp(props.weatherData);
      break;
    default:
      findHighestTemp(props.weatherData);
  }

  // return sortedData.map((cityData, i) => {

  //   return <p key={i}>{`${cityData[0]} ${Math.round(cityData[1])}`}</p>;
  // });

  return <WeatherDisplayWidget weatherData={sortedData.length > 10 ? sortedData[0] : ""} />;
}

export default InfoDisplay;
