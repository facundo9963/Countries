import React from "react";
import { useDispatch } from "react-redux";
import { createTouristActivity } from "../redux/actions";
import { useSelector } from "react-redux";


function AddTouristActivity  () {
  const allCountries = useSelector();
  const dispatch = useDispatch();
  let [activity, setActivity] = React.useState({
    paises: [],
    name: "",
    difficulty: null,
    duration: null,
    season: "",
  });
  const handleChange = (e) => {
    e.preventDefault();
    setActivity({ ...activity, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createTouristActivity(activity));
    setActivity({
      countryAct: "",
      countries: [],
      name: "",
      difficulty: null,
      duration: null,
      season: "",
    });
  };

  const submitCountry = (e) => {
    e.preventDefault();
    let selectedCountry = allCountries.countries.find((country) =>
        country.name.toLowerCase().includes(activity.countryAct.toLowerCase())
    );
    setActivity({ ...activity, [activity.countries]: [...activity.countries, selectedCountry.ID], countryAct:""  });

    
  };
  return (
    <div>
      <form onSubmit={(e) => submitCountry(e)}>
        <label>Elegí los paises </label>
        <input onChange={(e) => handleChange(e)} name="countryAct" />
        <button type="submit">Agregar</button>
      </form>

      <form onSubmit={(e) => handleSubmit(e)}>
        <label>Name: </label>
        <input onChange={(e) => handleChange(e)} name="name" />
        <label>Dificulty: </label>
        <input onChange={(e) => handleChange(e)} name="difficulty" />
        <label>Duration: </label>
        <input onChange={(e) => handleChange(e)} name="duration" />
        <label>Season: </label>
        <input onChange={(e) => handleChange(e)} name="season" />
        <button type="submit">Create</button>
      </form>

    </div>
  );
};

export default AddTouristActivity;