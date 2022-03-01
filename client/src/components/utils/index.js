

import { filterByContinent, filterByTouristActivity } from "../../redux/actions";



export function handleFilterByContinent(e,dispatch){

    dispatch(filterByContinent(e.target.value))
}
export function handleFilterByTouristActivity(e,dispatch){

    dispatch(filterByTouristActivity(e.target.value))
}
