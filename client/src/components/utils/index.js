

import { filterByContinent } from "../../redux/actions";



export function handleFilterByContinent(e,dispatch){

    dispatch(filterByContinent(e.target.value))




}