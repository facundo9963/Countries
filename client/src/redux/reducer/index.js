import { GET_ALL_COUNTRIES, GET_ONE_COUNTRY} from "../actions";


const initialState = {
    countries: [],
    countryID:[],
};

const rootReducer = (state = initialState, {type, payload}) => {
    switch(type) {
        // Acá va tu código:
        case GET_ALL_COUNTRIES:
            return{ ...state, countries: [...state.countries, ...payload]}
        case GET_ONE_COUNTRY:
            return {...state,countryID: payload}
        // case GET_HOUSE:
        //     return{...state,house:payload}
        //  case CREATE_CHARACTER:
        //     return {...state, characters: [...state.characters, payload]}
        // case DELETE_HOUSE:
        //     return {...state, houses: state.houses.filter(function(el){
        //         return el.id !== payload
        //       })}
        default: return state;

       
    };
};

export default rootReducer;