import React from 'react'
import styles from './styles/Country.module.css'

function Country(props) {
  return (
    <div className={styles.Country}>
        <h1>{props.name}</h1>
        <img src={props.image} alt="imagen no encontrada" width ="300px" height="200px" />
        <span>{props.continent} </span>
    </div>
  )
}

export default Country