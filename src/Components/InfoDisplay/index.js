import React from "react";
import styled from "styled-components";

function InfoDisplay(props) {
  function findHighestTemp(weatherData) {
    weatherData.sort((a, b) => {
      return b[1] - a[1];
    });
  }

  return props.weatherData.map(cityData => {
    return <p>{`${cityData[0]} ${cityData[1]}`}</p>;
  });
}

export default InfoDisplay;
