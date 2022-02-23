import {
  GET_ALL_COUNTRIES,
  GET_ONE_COUNTRY,
  CREATE_TOURIST_ACTIVITY,
  FILTER_BY_CONTINENT,
  FILTER_BY_TOURIST_ACTIVITY,
} from "../actions";

// function continentFilter(countries, payload) {
//   countries.filter((country) => country.continent === payload);
// }
function touristActivityFilter(countries, payload) {
  countries.filter((country) => country.continent === payload);
}

function unifiedFilters(filteredByContinent, filteredByTouristActivity) {
  filteredByContinent.filter((country) =>  filteredByTouristActivity.includes(country));
}

const initialState = {
  countries: [],
  countryID: [],
  filteredByContinent: [],
  filteredByTouristActivity: [],
  allFiltered: [],
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_COUNTRIES:
      return {
        ...state,
        countries: [...payload],
        allFiltered: [...payload],
        filteredByContinent: [...payload],
        filteredByTouristActivity: [...payload],
      };
    case GET_ONE_COUNTRY:
      return { ...state, countryID: payload };
    case CREATE_TOURIST_ACTIVITY:
      return { ...state };
    case FILTER_BY_CONTINENT:
      if (payload !== "All") {
        let filtered =  state.countries.filter((country) => country.continent.toLowerCase().includes(payload.toLowerCase()));

        let completelyFiltered =   filtered.filter((country) =>  state.filteredByTouristActivity.includes(country));
        console.log(completelyFiltered)

        return {
          ...state,
          filteredByContinent: filtered,
          allFiltered: completelyFiltered,
        };
      } else {
        return {
          ...state,
          allFiltered: state.filteredByTouristActivity,
          filteredByContinent: state.countries,
        };
      }
    case FILTER_BY_TOURIST_ACTIVITY:
      if (payload.data !== "none") {
        let filtered = touristActivityFilter(state.countries, payload);
        let completelyFiltered = unifiedFilters(
          filtered,
          state.filteredByContinent
        );
        return {
          ...state,
          filteredByTouristActivity: filtered,
          allFiltered: completelyFiltered,
        };
      } else {
        return {
          ...state,
          allFiltered: state.filteredByContinent,
          filteredByTouristActivity: state.countries,
        };
      }

    default:
      return state;
  }
};

export default rootReducer;
