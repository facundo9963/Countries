export function continentFilter(countries, payload){
    countries.filter(country=> country.continent===payload)
}
export function touristActivityFilter(countries, payload){
    countries.filter(country=> country.continent===payload)
}

export function unifiedFilters(filteredByContinent, filteredByTouristActivity){
    filteredByContinent.filter(country=>filteredByTouristActivity.find(country))
}