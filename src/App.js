import React from "react";
import styled from "styled-components";

import { getWeatherData } from "./Services/fetchWeatherData";
import InfoDisplay from "./Components/InfoDisplay";

const AppShell = styled.div`
  width: 100%;
  height: 100vh;
`;

class App extends React.Component {
  state = {
    weatherData: [],
  };

  componentDidMount() {
    getWeatherData().then(data =>
      data.list.forEach(listItem => {
        this.setState(state => ({
          weatherData: [...state.weatherData, [listItem.name, listItem.main.temp]],
        }));
      })
    );
  }

  render() {
    return (
      <AppShell>
        <InfoDisplay weatherData={this.state.weatherData} />
      </AppShell>
    );
  }
}

export default App;
