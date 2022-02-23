import styles from "./App.module.css";
import {  Route } from "react-router-dom";
import Nav from "./components/Nav";
import React from "react";

import CountryDetail from "./components/CountryDetail";
import AddTouristActivity from "./components/AddTouristActivity";

import Home from "./components/Home";
import MainPage from "./components/MainPage";


function App() {


  return (
    <div className={styles.App}>
      <Route path="/" component={Nav} />
      <Route exact path="/" component={MainPage} />
      
      <Route exact path="/countries" component={Home} />
      <Route exact path="/countries/:ID" component={CountryDetail} />
      <Route exact path="/activity" component={AddTouristActivity} />
    </div>
  );
}

export default App;