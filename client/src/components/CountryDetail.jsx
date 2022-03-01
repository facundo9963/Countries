import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getOneCountry } from "../redux/actions";
import { useDispatch } from "react-redux";
import TouristActivity from "./TouristActivity";
import styles from "./styles/CountryDetail.module.css"

// CUIDADOOOO. SI O SI FUNCTIONAL COMPONENT! SE ROMPEN LOS TEST EN CASO CONTRARIO!!
// TAMBIEN VAS A TENER QUE USAR HOOKS!
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
      <span>ID: {Country.ID}</span>
      <span>Subregion: {Country.subregion}</span>
      <span>Area: {Country.area}</span>
      <span>Population: {Country.population}</span>
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
