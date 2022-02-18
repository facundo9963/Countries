import React from 'react'

import styles from './styles/Country.module.css'
import {useHistory} from "react-router-dom"



function Country(props) {

  const history=useHistory();

  const handleClick=()=>{
    
    let path=`/countries/detail/${props.ID}`;
    history.push(path);
  }

  return (
    <div className={styles.Country}>
        <h1>{props.name}</h1>
        <img src={props.image} alt="imagen no encontrada" width ="300px" height="200px" />
        <span>{props.continent} </span>
        <button onClick={handleClick}>Detail</button>
    </div>
  )
}

export default Country