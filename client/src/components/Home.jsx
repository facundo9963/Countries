import React, {  useEffect, useState } from 'react';
import {  useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { getAllCountries } from '../redux/actions';
import Country from './Country';
import Paginate from './Paginate';
import Search from './Search';
import styles from "./styles/Home.module.css"


function Home() {
  const dispatch= useDispatch();
  const location=useLocation();
  const query= location.search
  console.log(location)

  useEffect(() => {
    dispatch(getAllCountries(query))
  }, [dispatch, query])
  

    
   
  

  const countries = useSelector(state => state.allFiltered)
    
 

  
  const[currentPage, setCurrentPage]=useState(1);
  const[CountriesPerPage]=useState(10);
  const[order,setOrder]=useState();
  const lastIndex= currentPage* CountriesPerPage;
  const firstIndex= lastIndex- CountriesPerPage;
  const currentCountries=countries.slice(firstIndex,lastIndex)

  const paginate=(pageNumber)=>{
    setCurrentPage(pageNumber)
  }


  return (
    <>
    <Search setCurrentPage={setCurrentPage} setOrder={setOrder}/>
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
            capital={country.capital}
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