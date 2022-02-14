var express = require("express");
var router = express.Router();
const axios = require('axios');
const { Country, TouristActivity } = sequelize.models;

router.get("/", async function (req, res, next) {
    const countries = await axios.get('https://restcountries.com/v3/all');
    countries.map(country=> Country.create({
        ID:country.cca3,
        name: country.name.common,
        image: country.flags[0],
        continent:country.continents[0],
        capital:country.capital,
        subregion:country.subregion,
        area: country.area,
        population: country.population,

    }))


    res.render("index", { title: "Express" });
  });
  
module.exports = router;