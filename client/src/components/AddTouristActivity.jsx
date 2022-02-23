import React from "react";
import { useDispatch } from "react-redux";
import { createTouristActivity } from "../redux/actions";
import { useSelector } from "react-redux";


const AddTouristActivity = () => {
  const allCountries = useSelector(state=> state.countries);
  const dispatch = useDispatch();
  const [activity, setActivity] = React.useState({
    countryAct: "",
    countries: [],
    name:"",
    difficulty: 0,
    duration: 0,
    season:"",
  });
  const handleChange = (e) => {
    e.preventDefault();
    setActivity({ ...activity, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createTouristActivity(activity));
    console.log(activity)
      setActivity({
        countryAct: "",
        countries: [],
        name:"",
        difficulty: 0,
        duration: 0,
        season:"",
      });

  };

  const submitCountry = (e) => {
    e.preventDefault();
    if(e.target.value!==""){
      const selectedCountries = allCountries.filter((country) => country.name.toLowerCase().includes(activity.countryAct.toLowerCase()) )
      if(selectedCountries){
        
        console.log(selectedCountries)
        setActivity({ ...activity, countries:[...activity.countries, ...selectedCountries] });

      }
      setActivity({...activity , countryAct:""})
      console.log(activity)
      
      
    }
  };
  return (
    <div>
      <form onSubmit={(e) => submitCountry(e)}>
        <label>Elegí los paises </label>
        <input onChange={(e) => handleChange(e)} name="countryAct" value={activity.countryAct}/>
        <button type="submit">Agregar</button>
      </form>

      <form onSubmit={(e) => handleSubmit(e)}>
        <label>Name: </label>
        <input onChange={(e) => handleChange(e)} name="name" value={activity.name}/>
        <label>Dificulty: </label>
        <input onChange={(e) => handleChange(e)} name="difficulty"  value={activity.difficulty}/>
        <label>Duration: </label>
        <input onChange={(e) => handleChange(e)} name="duration" value={activity.duration}/>
        <label>Season: </label>
        <input onChange={(e) => handleChange(e)} name="season" value={activity.season}/>
        <button type="submit">Create</button>
      </form>

    </div>
  );
};

export default AddTouristActivity;
