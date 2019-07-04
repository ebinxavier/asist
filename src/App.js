import React, { Component } from "react";
import { Router, Scene } from "react-native-router-flux";
import { Text } from "react-native";

import HomeScreen from "./components/home";
import DetailsScreen from "./components/details";

const App = () => {
  return (
    <Router>
      <Scene key="root">
        {/* Tab and it's scenes */}
        <Scene key="home" component={HomeScreen} title="Scarlet" />
        <Scene key="details" component={DetailsScreen} title="Gray" />
        {/* Removed for brevity */}
      </Scene>
    </Router>
  );
};

export default App;
