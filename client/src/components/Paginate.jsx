import React from "react";
import styles from "./styles/Paginate.module.css"

export default function Paginate({countriesPerPage, countries, paginate }){
    const pageNumbers=[]

    for(let i=1; i<=Math.ceil(countries/countriesPerPage);i++){
        pageNumbers.push(i)
    }
    return(
        <div className={styles.container}>
        
            {
                pageNumbers && pageNumbers.map(number=>(
                    <div  key={number}>
                        <button  className={styles.btn} onClick={()=>paginate(number)}>{number}</button>
                    </div>
                ))
            }
        
    </div>
)
}