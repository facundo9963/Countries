import React from "react";
import { useDispatch } from "react-redux";
import { createTouristActivity } from "../redux/actions";
import { useSelector } from "react-redux";

import styles from "./styles/AddTouristActivity.module.css";



const AddTouristActivity = () => {
  const allCountries = useSelector((state) => state.countries);
  console.log("all countries", allCountries);

  const dispatch = useDispatch();
  const [allSelected, setAllSelected] = React.useState([]);

  const [activity, setActivity] = React.useState({
    countryAct: "",
    countries: [],
    name: "",
    difficulty: "",
    duration: "",
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
      difficulty: "",
      duration: "",
      season: "",
    });
    setAllSelected([])
    
  };
  const handleDelete = (name,ID) => {
    setAllSelected(
      allSelected.filter((country) => country.name !== name)
    );
    console.log(ID)
    


    setActivity({ ...activity, countries: [...activity.countries.filter((id)=> id!==ID)]});
    console.log("otra vez data",activity.countries)
  };

  const submitCountry = (e) => {
    e.preventDefault();
    if (activity.countryAct !== "") {
      console.log(activity.countryAct);
      const selectCountry = allCountries.find((country) =>
        country.name.toLowerCase().includes(activity.countryAct.toLowerCase())
      );
      if (selectCountry) {
        console.log("selected countries", selectCountry);

        const CountriesData = {name:selectCountry.name,
        ID:selectCountry.ID}
       
        console.log(selectCountry);
        setActivity({
          ...activity,
          countries: activity.countries.push(selectCountry.ID),
        });
        console.log(activity.countries)
        setAllSelected([...allSelected, CountriesData]);
        
      }
      setActivity({ ...activity, countryAct:"" });
      console.log("countryAct",activity.countryAct)

    }
  };


  function handleValidate(e) {
    e.preventDefault();
    var name = document.getElementById('name').value;
    if(name.length === 0) {
      alert('Please, put the name of the activity');
      return;
    }
    var difficulty = document.getElementById('difficulty').value;
    if (difficulty>5 || difficulty<1) {
      alert('Put a difficulty between 1 and 5');
      return;
    }
    var season=document.getElementById('season').value;
    if(!season){
      alert('choose a season');
      return;
    }
    handleSubmit(e);
  }

  return (
    <div className={styles.container}>
      <form onSubmit={(e) => submitCountry(e)}>
        <label>Chose one or more countries </label>
        <input
          onChange={(e) => handleChange(e)}
          name="countryAct"
          placeholder="Add a country"
          value={activity.countryAct}
        />
        <button className={styles.btn} type="submit">
          Add
        </button>
      </form>
      <div className={styles.cardContainer}>
        {allSelected &&
          allSelected.map((country,i) => {
            return (
              <div key={i} className={styles.card}>
                <label>{country.name}</label>
                <button
                  
                  onClick={() => handleDelete(country.name,country.ID)}
                >
                  X
                </button>
              </div>
            );
          })}
      </div>

      <form onSubmit={(e) => handleValidate(e)}>
        <label>Name: </label>
        <input
          id="name"
          onChange={(e) => handleChange(e)}
          name="name"
          placeholder="name"
          value={activity.name}
          required
        />
        <label>Dificulty: </label>
        <input
          id="difficulty"
          onChange={(e) => handleChange(e)}
          name="difficulty"
          placeholder="difficulty"
          value={activity.difficulty}
          required
        />
        <label>Duration: </label>
        <input
          id="duration"
          onChange={(e) => handleChange(e)}
          name="duration"
          placeholder="duration"
          value={activity.duration}
          required
        />
        <label>Season: </label>
        <select id="season" name="season" onChange={(e) => handleChange(e)}>
          <option value="">Chose One</option>
          <option value="summer">Summer</option>
          <option value="winter">Winter</option>
          <option value="spread">Spread</option>
          <option value="autumn">Autumn</option>
        </select>
        <button className={styles.btn} type="submit">
          Create
        </button>
      </form>
    </div>
  );
};

export default AddTouristActivity;
