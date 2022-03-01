import React from "react";
import { useDispatch, useSelector } from "react-redux";

import styles from "./styles/Search.module.css";
import SearchBar from "./SearchBar";
import { filterByContinent, filterByTouristActivity, getAllActivities, sortByName, sortByPopulation } from "../redux/actions";


function Search({setCurrentPage, setOrder}) {

  let activities= useSelector(state => state.allActivities)
  let dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getAllActivities())
  }, [dispatch]);

  
  function handleFilterByContinent(e,setCurrentPage){
    e.preventDefault()
    setCurrentPage(1)
  

  
    dispatch(filterByContinent(e.target.value))
  }
  
  function handleFilterByTouristActivity(e,setCurrentPage){
  e.preventDefault()
  setCurrentPage(1)
  dispatch(filterByTouristActivity(e.target.value))
  }
  
  function handleSortByName(e,setCurrentPage){
  e.preventDefault()
  setCurrentPage(1)
  setOrder(`Order By ${e.target.value}`)
  dispatch(sortByName(e.target.value))
  }

  function handleSortByPopulation(e,setCurrentPage){
  e.preventDefault()
  setCurrentPage(1)
  setOrder(`Order By ${e.target.value}`)
  dispatch(sortByPopulation(e.target.value))
  }
  

  return (
    <>
    <SearchBar/>
    <div className={styles.container}>
      <div className={styles.desplegable}>
        <select onChange={(e)=>handleSortByName(e,setCurrentPage)}
        className={styles.select}>
          <option value="">Alphabetical</option>
          <option value="A-Z">A-Z</option>
          <option value="Z-A">Z-A</option>
        </select>
      </div>
      <div className={styles.desplegable}>
        <select onChange={(e)=>{handleSortByPopulation(e,setCurrentPage)}} className={styles.select}>
          <option value=""> Population</option>
          <option value="Max to Min">Descendente</option>
          <option value="Min to Max">Ascendente</option>
        </select>
      </div>
      <div className={styles.desplegable}>

        <select
          className={styles.select}
          onChange={(e) => handleFilterByContinent(e,setCurrentPage)}
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
          onChange={(e) => handleFilterByTouristActivity(e,setCurrentPage)}
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
