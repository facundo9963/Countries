import React from 'react';
import { useSelector } from 'react-redux';
import Country from './Country';
import styles from "./styles/AllCountries.module.css"


function AllCountries() {

    

    const countries = useSelector(state => state.countries)
    


  return (
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
  )
}

export default AllCountries;