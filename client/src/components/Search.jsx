import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleFilterByContinent, handleFilterByTouristActivity } from "./utils";
import styles from "./styles/Search.module.css";
import SearchBar from "./SearchBar";
import { getAllActivities } from "../redux/actions";

function Search() {
  let activities= useSelector(state => state.allActivities)
  let dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getAllActivities())
  }, [dispatch]);
  return (
    <>
    <SearchBar />
    <div className={styles.container}>
      <div className={styles.desplegable}>
        <select className={styles.select}>
          <option value="A-Z">A-Z</option>
          <option value="Z-A">Z-A</option>
        </select>
      </div>
      <div className={styles.desplegable}>
        <select className={styles.select}>
          <option value="Max to Min">Descendente</option>
          <option value="Min to Max">Ascendente</option>
        </select>
      </div>
      <div className={styles.desplegable}>

        <select
          className={styles.select}
          onChange={(e) => handleFilterByContinent(e, dispatch)}
          >
          <option value="All">All</option>
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Antarctica">Antarctica</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
        <select
          className={styles.select}
          onChange={(e) => handleFilterByTouristActivity(e, dispatch)}
          >
          <option value="none">None</option>
          {activities && activities.map((activity, i)=>{
            return(
              
              <option key={i} value={activity}>{activity}</option>
            

            )
            })}
        </select>
      </div>
    </div>
          </>
  );
}

export default Search;
