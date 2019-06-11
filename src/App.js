import React from "react";
import styled from "styled-components";
import CssBaseline from "@material-ui/core/CssBaseline";

import { getWeatherData } from "./Services/fetchWeatherData";
import InfoDisplay from "./Components/InfoDisplay";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

import { theme } from "./Ultils/theme";
import { ThemeProvider } from "@material-ui/styles";

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
      <>
        <CssBaseline />
        <ThemeProvider theme={theme}>
          <AppShell>
            <AppBar className="top-bar" position="sticky" color="secondary">
              <Grid className="top-bar__grid" container alignItems="center">
                <Grid className="top-bar__grid-item" item xs={3}>
                  <Button variant="contained" color="primary" size="medium">
                    Warmest Capital{" "}
                  </Button>
                </Grid>
                <Grid className="top-bar__grid-item" item xs={3}>
                  <Button variant="contained" color="primary" size="medium">
                    Coldest Capital
                  </Button>
                </Grid>
                <Grid className="top-bar__grid-item" item xs={3}>
                  <Button variant="contained" color="primary" size="medium">
                    Warmest Country
                  </Button>
                </Grid>
                <Grid className="top-bar__grid-item" item xs={3}>
                  <Button variant="contained" color="primary" size="medium">
                    Coldest Country
                  </Button>
                </Grid>
              </Grid>
            </AppBar>
            <InfoDisplay weatherData={this.state.weatherData} />
          </AppShell>
        </ThemeProvider>
      </>
    );
  }
}

export default App;
