import React from "react";
import styles from "./styles/TouristActivity.module.css"



function TouristActivity(props) {
    
    return (
      <div className={styles.container}>
        <div>Activity: {props.name}</div>
        <div>Difficulty: {props.difficulty}</div>
        <div>Duration: {props.duration} min</div>
        <div>Season: {props.season}</div>
      </div>
    );

}

export default TouristActivity;
