import styles from "./App.module.css";
import {  Route } from "react-router-dom";
import Nav from "./components/Nav";
import React, { useEffect } from "react";
import AllCountries from "./components/AllCountries";
import CountryDetail from "./components/CountryDetail";
import { getAllCountries } from "./redux/actions";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCountries())
  }, [dispatch])

  return (
    <div className={styles.App}>
      <Route path="/" component={Nav} />
      <Route exact path="/countries" component={AllCountries} />
      <Route exact path="/countries/detail/:ID" component={CountryDetail} />
    </div>
  );
}

export default App;