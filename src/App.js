import React, { useEffect } from "react";
import styled from "styled-components";

import { apiKey, getWeatherData } from "./Services/fetchWeatherData";

const AppShell = styled.div`
  width: 100%;
  height: 100vh;
`;

function App() {
  useEffect(() => {
    getWeatherData().then(data => console.log(data));
  }, []);
  return <AppShell>hello</AppShell>;
}

export default App;
