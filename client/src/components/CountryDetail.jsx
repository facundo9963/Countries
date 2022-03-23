import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getOneCountry } from "../redux/actions";
import { useDispatch } from "react-redux";
import TouristActivity from "./TouristActivity";
import styles from "./styles/CountryDetail.module.css"


const CountryDetail = () => {
  const { ID } = useParams();

  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getOneCountry(ID));
  }, [dispatch, ID]);

  const Country = useSelector((state) => state.countryID);

  return (
    <div className={styles.container}>
      <h1 >{Country.name}</h1>
      <img className={styles.img}
        src={Country.image}
        alt="imagen no encontrada"
        width="300px"
        height="200px"
      />
      <div className= {styles.caracteristicas}>

      <span>Continent: {Country.continent} </span>
      <span>Capital: {Country.capital? Country.capital : "Doesn`t have"} </span>
      <span>ID: {Country.ID? Country.ID: "Doesn`t have"}</span>
      <span>Subregion: {Country.subregion? Country.subregion : "Doesn`t have"}</span>
      <span>Area: {Country.area? Country.area+" km²":"Doesn`t have"}</span>
      <span>Population: {Country.population ? Country.population:"Doesn`t have"}</span>
      </div>
      {console.log(Country.TouristActivities)}
      {Country.TouristActivities && Country.TouristActivities.map((activity) => {
        return (
          <TouristActivity
            key={activity.id}
            name={activity.name}
            difficulty={activity.difficulty}
            duration={activity.duration}
            season={activity.season}
          />
        )
      })}

    </div>
  );
};

export default CountryDetail;
