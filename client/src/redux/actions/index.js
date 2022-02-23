import axios from 'axios'

export const GET_ALL_COUNTRIES = 'GET_ALL_COUNTRIES';
export const GET_ONE_COUNTRY="GET_ONE_COUNTRY";
export const CREATE_TOURIST_ACTIVITY = 'CREATE_TOURIST_ACTIVITY';
export const FILTER_BY_CONTINENT = 'FILTER_BY_CONTINENT';
export const FILTER_BY_TOURIST_ACTIVITY = 'FILTER_BY_TOURIS_ACTIVITY';

export function getAllCountries(){
    return async function(dispatch){
        let response=await axios.get("http://localhost:3001/countries")
        return dispatch({
            type:GET_ALL_COUNTRIES, payload: response.data
        })
    }
}
export function getOneCountry(ID){
    return async function(dispatch){
        let response= await axios.get(`http://localhost:3001/countries/${ID}`)
        return dispatch({
            type:GET_ONE_COUNTRY, payload:response.data
        })
    }
};

export function createTouristActivity(data) {
    return async function(dispatch){
        let response= await axios.post("http://localhost:3001/activity", data)
        return dispatch({type:CREATE_TOURIST_ACTIVITY, payload: response.data})
    }
}
export function filterByContinent(payload){
    return {
        type: "FILTER_BY_CONTINENT",
        payload
    }
}
export function filterByTouristActivity(data){
    return async function(dispatch){
        let response= await axios.get(`http://localhost:3001/activity/${data}`)
    
    return dispatch({
        type: "FILTER_BY_TOURIST_ACTIVITY",
        payload:{data,response}
    })
}
}

