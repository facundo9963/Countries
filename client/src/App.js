import "./App.css";
import {  Route } from "react-router-dom";
import Nav from "./components/Nav";
import React, { useEffect } from "react";
import AllCountries from "./components/AllCountries";
import { getAllCountries } from "./redux/actions";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCountries())
  }, [dispatch])

  return (
    <div>
      <Route path="/" component={Nav} />
      <Route exact path="/countries" component={AllCountries} />
    </div>
  );
}

export default App;
