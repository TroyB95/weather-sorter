import React from "react";
import styled from "styled-components";

function InfoDisplay(props) {
  let sortedData = [];
  (function findHighestTemp(weatherData) {
    console.log(weatherData);
    sortedData = [...weatherData].sort((a, b) => {
      return b[1] - a[1];
    });
  })(props.weatherData);

  return sortedData.map((cityData, i) => {
    return <p key={i}>{`${cityData[0]} ${cityData[1]}`}</p>;
  });
}

export default InfoDisplay;
