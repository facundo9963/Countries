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
        <h1 className={styles.item1}>{props.name}</h1>
        <img className={styles.item2} src={props.image} alt="imagen no encontrada" width ="300px" height="200px" />
        <span className={styles.item3}>{props.continent} </span>
        <button className={styles.item4} onClick={handleClick}>Detail</button>
    </div>
  )
}

export default Country