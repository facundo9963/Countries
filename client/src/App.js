import styles from "./App.module.css";
import {  Route } from "react-router-dom";
import Nav from "./components/Nav";
import React from "react";

import CountryDetail from "./components/CountryDetail";
import AddTouristActivity from "./components/AddTouristActivity";

import Home from "./components/Home";
import LandingPage from "./components/LandingPage";






function App() {

  return (
    <div className={styles.App}>
      <Route path="/" component={Nav} />  
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/countries/:ID" component={CountryDetail} />
      <Route exact path="/activity" component={AddTouristActivity} />
      <Route exact path="/countries" component={Home} />
    </div>
  );
}

export default App;