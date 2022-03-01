import React from 'react'

import styles from './styles/LandingPage.module.css'
import {useHistory} from "react-router-dom"



function LandingPage() {

  const history=useHistory();

  const handleClick=()=>{
    
    let path=`/countries`;
    history.push(path);
  }

  return (
    <div className={styles.container}>
        <h1 className={styles.item1}>Countries PI</h1>
        <span className={styles.item3}>Dale click al botón de abajo para ver todos los países!</span>
        <button className={styles.btn} onClick={handleClick}>Home</button>
    </div>
  )
}

export default LandingPage