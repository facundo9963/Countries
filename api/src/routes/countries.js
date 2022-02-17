var express = require("express");
var router = express.Router();
const axios = require("axios");
const { Sequelize, Op } = require("sequelize");
const { Country, TouristActivity } = require("../db");

router.get("/", async function (req, res, next) {
  let countryName = req.query.name;

  //   if (countryName) {
  //     console.log (countryName)
  //     const country = await Country.findAll({
  //       where: {
  //         name: {
  //           [Op.iLike]: `${countryName}`,
  //         }
  //       },
  //     });
  //     console.log(country)
  //     if (country !==[]) {
  //       res.json(country);
  //     } else {
  //       res.status(404).send("No existe ese país");
  //     }
  //   } else {
  const countries = await axios.get("https://restcountries.com/v3/all");


  countries.data.forEach(function (country) {
    Country.findOrCreate({
      where: { ID: country.cca3 },
      defaults: {
        name: country.name.common,
        image: country.flags[0],
        continent: country.continents[0],
        //   capital: country.capital[0],
        subregion: country.subregion,
        area: country.area,
        population: country.population,
      },
    });
  });
  let allCountries = await Country.findAll();
  if (countryName) {
    let foundCountries = allCountries.filter((country) =>
      country.name.toLowerCase().includes(countryName.toLowerCase())
    );
    foundCountries.length
      ? res.json(foundCountries)
      : res.status(404).json("no existe ese pais");
  } else {
    res.json(allCountries);
  }
});

router.get("/:idPais", async function (req, res) {
  const { idPais } = req.params;
  const miRegExp=/\b[A-Z]{3}\b/
  // ACÁ PODRIA VALIDAR SI LLEGAN 3 LETRAS MAY, DE LO CONTRARIO NUNCA VA A ENCONTRAR UN PAIS
  if (miRegExp.test(idPais)) {
    let country = await Country.findOne({
      where: {
        ID: idPais,
      },
      include: TouristActivity,
    });
    res.json(country);
  } else {
    res.status(404).json("no existe ese país");
  }
});

module.exports = router;
