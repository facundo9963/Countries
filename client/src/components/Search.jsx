import React from "react";
import { useDispatch } from "react-redux";
import { handleFilterByContinent } from "./utils";
import styles from "./styles/Search.module.css";

function Search() {
  let dispatch = useDispatch();
  return (
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
      </div>
    </div>
  );
}

export default Search;
