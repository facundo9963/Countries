var express = require("express");
var router = express.Router();
const axios = require("axios");
const { Sequelize, Op } = require("sequelize");
const { Country, TouristActivity } = require("../db");

router.get("/", async function (req, res, next) {
  try {

    let {name} = req.query;


    const countries = await axios.get("https://restcountries.com/v3/all");

    countries.data.forEach(function (country) {
      Country.findOrCreate({
        where: { ID: country.cca3 },

        defaults: {
          name: country.name.common,
          image: country.flags[0],
          continent: country.continents[0],
          capital:  country.capital ? country.capital[0]: null,
          subregion: country.subregion,
          area: country.area,
          population: country.population,
        },
      });
    });
    let allCountries = await Country.findAll({
      include: {
        model: TouristActivity,
      },
    });
    if (name) {
      let foundCountries = allCountries.filter((country) =>
        country.name.toLowerCase().includes(name.toLowerCase())
      );
      foundCountries
        ? res.json(foundCountries)
        : res.status(404).json("no existe ese pais");
    } else {
      res.json(allCountries);
    }
  } catch (error) {
    res.status(404).json(console.log(error));
  }
});

router.get("/:idPais", async function (req, res) {
  const { idPais } = req.params;
  const miRegExp = /\b[A-Z]{3}\b/;
  // ACÁ PODRIA VALIDAR SI LLEGAN 3 LETRAS MAY, DE LO CONTRARIO NUNCA VA A ENCONTRAR UN PAIS
  if (miRegExp.test(idPais)) {
    let country = await Country.findOne({
      where: {
        ID: idPais,
      },
      include: {
        model: TouristActivity,
      },
    });
    res.json(country);
    console.log(country)
  } else {
    res.status(404).json("no existe ese país");
  }
});

module.exports = router;
