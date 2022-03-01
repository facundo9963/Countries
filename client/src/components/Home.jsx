import React, { useState } from 'react';
import {  useSelector } from 'react-redux';
import Country from './Country';
import Paginate from './Paginate';
import Search from './Search';
import styles from "./styles/Home.module.css"


function Home() {


  
  const countries = useSelector(state => state.allFiltered)
  const[currentPage, setCurrentPage]=useState(1);
  const[CountriesPerPage]=useState(10);
  const lastIndex= currentPage* CountriesPerPage;
  const firstIndex= lastIndex- CountriesPerPage;
  const currentCountries=countries.slice(firstIndex,lastIndex)

  const paginate=(pageNumber)=>{
    setCurrentPage(pageNumber)
  }


  return (
    <>
    <Search/>
    <Paginate countriesPerPage={CountriesPerPage}
    countries={countries.length}
    paginate={paginate}/>


    <div className={styles.Countries}> 
        {      currentCountries && currentCountries.map(country =>{
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