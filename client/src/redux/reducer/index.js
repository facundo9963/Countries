import {
  GET_ALL_COUNTRIES,
  GET_ONE_COUNTRY,
  CREATE_TOURIST_ACTIVITY,
  FILTER_BY_CONTINENT,
  FILTER_BY_TOURIST_ACTIVITY,
  FILTER_BY_SEARCH,
  GET_ALL_ACTIVITIES,
  SORT_BY_NAME,
  SORT_BY_POPULATION,

} from "../actions";

// function continentFilter(countries, payload) {
//   countries.filter((country) => country.continent === payload);
// }

const initialState = {
  countries: [],
  allActivities: [],
  countryID: [],
  filteredBySearch: [],
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
        filteredBySearch: [...payload],
        allFiltered: [...payload],
        filteredByContinent: [...payload],
        filteredByTouristActivity: [...payload],
      };
    case GET_ONE_COUNTRY:
      return { ...state, countryID: payload };
    case CREATE_TOURIST_ACTIVITY:
      return { ...state };
    case FILTER_BY_CONTINENT:
      //FILTRO SOLO POR LO QUE YA ESTÁ Y NO VA A CAMBIAR
      let filter1 = state.filteredByTouristActivity.filter((country) =>
        state.filteredBySearch.includes(country)
      );

      if (payload !== "All") {
        //FILTRO SOLO POR CONTINENTE SI LO HAY
        let filter2 = state.countries.filter((country) =>
          country.continent.toLowerCase().includes(payload.toLowerCase())
        );
        //JUNTO LOS COINCIDENTES DE TODOS LOS FILTROS

        let filter3 = filter2.filter((country) => filter1.includes(country));
        console.log(filter3);

        return {
          ...state,
          filteredByContinent: filter2, //ACT FILTRADOS POR CONTINENTE
          allFiltered: filter3, //ACT ALL FILTER
        };
      } else {
        return {
          ...state,
          allFiltered: filter1, //ACT CON SOLO LOS FILTROS QUE QUEDAN
          filteredByContinent: state.countries, // TODOS LOS PAISES EN ESTE ARREGLO
        };
      }
    case FILTER_BY_TOURIST_ACTIVITY:
      const filter11 = state.filteredByContinent.filter((country) =>
        state.filteredBySearch.includes(country)
      );
      if (payload !== "none") {
        const filter12 = state.countries.filter((country) =>
          country.TouristActivities.find(
            (activity) => activity.name.toLowerCase() === payload.toLowerCase()
          )
        );

        const filter13 = filter12.filter((country) =>
          filter11.includes(country)
        );

        return {
          ...state,
          filteredByTouristActivity: filter12,
          allFiltered: filter13,
        };
      } else {
        return {
          ...state,
          allFiltered: filter11,
          filteredByTouristActivity: state.countries,
        };
      }
    case FILTER_BY_SEARCH:
      const filter21 = state.filteredByContinent.filter((country) =>
        state.filteredByTouristActivity.includes(country)
      );
      if (payload !== "") {
        const filter22 = state.countries.filter((country) =>
          country.name.toLowerCase().includes(payload.toLowerCase())
        );
        const filter23 = filter22.filter((country) =>
          filter21.includes(country)
        );
        return {
          ...state,
          filteredBySearch: filter22,
          allFiltered: filter23,
        };
      } else {
        return {
          ...state,
          allFiltered: filter21,
          filteredBySearch: state.countries,
        };
      }
    case GET_ALL_ACTIVITIES:
      return {
        ...state,
        allActivities: [...payload],
      };
    case SORT_BY_NAME:
      let SortCountries = [];
      if (payload === "") {
        return { ...state };
      } else if (payload === "A-Z") {
        SortCountries = state.allFiltered.sort(function (a, b) {
          if (a.name > b.name) {
            return 1;
          }
          if (b.name > a.name) {
            return -1;
          }
          return 0;
        });
      } else if (payload === "Z-A") {
        SortCountries = state.allFiltered.sort(function (a, b) {
          if (a.name > b.name) {
            return -1;
          }
          if (b.name > a.name) {
            return 1;
          }
          return 0;
        });
      }
      return {
        ...state,
        allFiltered: SortCountries,
      };
    case SORT_BY_POPULATION:
      let SortCountriesPopulation = [];
      if (payload === "") {
        return { ...state };
      } else if (payload === "Min to Max") {
        SortCountriesPopulation = state.allFiltered.sort(function (a, b) {
          if (parseInt(a.population) > parseInt(b.population)) {
            return 1;
          }
          if (parseInt(b.population) > parseInt(a.population)) {
            return -1;
          }
          return 0;
        });
      } else if (payload === "Max to Min") {
        SortCountriesPopulation = state.allFiltered.sort(function (a, b) {
          if (parseInt(a.population) > parseInt(b.population)) {
            return -1;
          }
          if (parseInt(b.population) > parseInt(a.population)) {
            return 1;
          }
          return 0;
        });
      }
      return {
        ...state,
        allFiltered: SortCountriesPopulation,
      };
    default:
      return state;
  }
};

export default rootReducer;
