import React from 'react';
import { useSelector } from 'react-redux';
import Country from './Country';
import Search from './Search';
import styles from "./styles/Home.module.css"
import { getAllCountries } from "../redux/actions";
import { useDispatch } from "react-redux";
import{ useEffect } from "react";

function Home() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCountries())
  }, [dispatch])

    const countries = useSelector(state => state.allFiltered)
    


  return (
    <>
    <Search/>


    <div className={styles.Countries}> Hola
        {      countries && countries.map(country =>{
          return (
            
            <Country
            key={country.ID}
            ID={country.ID}
            name={country.name}
            image={country.image}
            //capital={country.capital}
            continent={country.continent}
            subregion={country.subregion}
            area={country.area}
            population={country.population}
            />)
          }  )}
    </div>

    </>
  )
}

export default Home;