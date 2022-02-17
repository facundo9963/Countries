const { DataTypes, Op } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("country", {
    ID: {
      type: DataTypes.STRING,
      allowNull:false,
      primaryKey: true,
      validate:{
        [Op.regexp]: '\b[A-Z]{3}\b'
      }
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    continent: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // capital: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
   // },
    subregion: {
      type: DataTypes.STRING,
    },
    area: {
      type: DataTypes.STRING,
    },
    population: {
      type: DataTypes.STRING,
    },

  });
};

// [
//   {
//     name: {
//       common: "Argentina",
//       official: "Argentine Republic",
//       nativeName: {
//         grn: { official: "Argentine Republic", common: "Argentina" },
//         spa: { official: "República Argentina", common: "Argentina" },
//       },
//     },
//     tld: [".ar"],
//     cca2: "AR",
//     ccn3: "032",
//     cca3: "ARG",
//     cioc: "ARG",
//     independent: true,
//     status: "officially-assigned",
//     unMember: true,
//     currencies: { ARS: { name: "Argentine peso", symbol: "$" } },
//     idd: { root: "+5", suffixes: ["4"] },
//     capital: ["Buenos Aires"],
//     altSpellings: ["AR", "Argentine Republic", "República Argentina"],
//     region: "Americas",
//     subregion: "South America",
//     languages: { grn: "Guaraní", spa: "Spanish" },
//     translations: {
//       ara: { official: "جمهورية الأرجنتين", common: "الأرجنتين" },
//       ces: { official: "Argentinská republika", common: "Argentina" },
//       cym: { official: "Gweriniaeth yr Ariannin", common: "Ariannin" },
//       deu: { official: "Argentinische Republik", common: "Argentinien" },
//       est: { official: "Argentina Vabariik", common: "Argentina" },
//       fin: { official: "Argentiinan tasavalta", common: "Argentiina" },
//       fra: { official: "République argentine", common: "Argentine" },
//       hrv: { official: "Argentinski Republika", common: "Argentina" },
//       hun: { official: "Argentin Köztársaság", common: "Argentína" },
//       ita: { official: "Repubblica Argentina", common: "Argentina" },
//       jpn: { official: "アルゼンチン共和国", common: "アルゼンチン" },
//       kor: { official: "아르헨티나 공화국", common: "아르헨티나" },
//       nld: { official: "Argentijnse Republiek", common: "Argentinië" },
//       per: { official: "جمهوری آرژانتین", common: "آرژانتین" },
//       pol: { official: "Republika Argentyńska", common: "Argentyna" },
//       por: { official: "República Argentina", common: "Argentina" },
//       rus: { official: "Аргентинская Республика", common: "Аргентина" },
//       slk: { official: "Argentínska republika", common: "Argentína" },
//       spa: { official: "República Argentina", common: "Argentina" },
//       swe: { official: "Republiken Argentina", common: "Argentina" },
//       urd: { official: "جمہوریہ ارجنٹائن", common: "ارجنٹائن" },
//       zho: { official: "阿根廷共和国", common: "阿根廷" },
//     },
//     latlng: [-34.0, -64.0],
//     landlocked: false,
//     borders: ["BOL", "BRA", "CHL", "PRY", "URY"],
//     area: 2780400.0,
//     demonyms: {
//       eng: { f: "Argentine", m: "Argentine" },
//       fra: { f: "Argentine", m: "Argentin" },
//     },
//     flag: "\uD83C\uDDE6\uD83C\uDDF7",
//     maps: {
//       googleMaps: "https://goo.gl/maps/Z9DXNxhf2o93kvyc6",
//       openStreetMaps: "https://www.openstreetmap.org/relation/286393",
//     },
//     population: 45376763,
//     gini: { 2019: 42.9 },
//     fifa: "ARG",
//     car: { signs: ["RA"], side: "right" },
//     timezones: ["UTC-03:00"],
//     continents: ["South America"],
//     flags: ["https://flagcdn.com/ar.svg", "https://flagcdn.com/w320/ar.png"],
//   },
// ];

// [
//   {
//     name: {
//       common: "Chile",
//       official: "Republic of Chile",
//       nativeName: { spa: { official: "República de Chile", common: "Chile" } },
//     },
//     tld: [".cl"],
//     cca2: "CL",
//     ccn3: "152",
//     cca3: "CHL",
//     cioc: "CHI",
//     independent: true,
//     status: "officially-assigned",
//     unMember: true,
//     currencies: { CLP: { name: "Chilean peso", symbol: "$" } },
//     idd: { root: "+5", suffixes: ["6"] },
//     capital: ["Santiago"],
//     altSpellings: ["CL", "Republic of Chile", "República de Chile"],
//     region: "Americas",
//     subregion: "South America",
//     languages: { spa: "Spanish" },
//     translations: {
//       ara: { official: "جمهورية تشيلي", common: "تشيلي" },
//       ces: { official: "Chilská republika", common: "Chile" },
//       cym: { official: "Gweriniaeth Chile", common: "Chile" },
//       deu: { official: "Republik Chile", common: "Chile" },
//       est: { official: "Tšiili Vabariik", common: "Tšiili" },
//       fin: { official: "Chilen tasavalta", common: "Chile" },
//       fra: { official: "République du Chili", common: "Chili" },
//       hrv: { official: "Republika Čile", common: "Čile" },
//       hun: { official: "Chilei Köztársaság", common: "Chile" },
//       ita: { official: "Repubblica del Cile", common: "Cile" },
//       jpn: { official: "チリ共和国", common: "チリ" },
//       kor: { official: "칠레 공화국", common: "칠레" },
//       nld: { official: "Republiek Chili", common: "Chili" },
//       per: { official: "جمهوری شیلی", common: "شیلی" },
//       pol: { official: "Republika Chile", common: "Chile" },
//       por: { official: "República do Chile", common: "Chile" },
//       rus: { official: "Республика Чили", common: "Чили" },
//       slk: { official: "Čílska republika", common: "Čile" },
//       spa: { official: "República de Chile", common: "Chile" },
//       swe: { official: "Republiken Chile", common: "Chile" },
//       urd: { official: "جمہوریہ چلی", common: "چلی" },
//       zho: { official: "智利共和国", common: "智利" },
//     },
//     latlng: [-30.0, -71.0],
//     landlocked: false,
//     borders: ["ARG", "BOL", "PER"],
//     area: 756102.0,
//     demonyms: {
//       eng: { f: "Chilean", m: "Chilean" },
//       fra: { f: "Chilienne", m: "Chilien" },
//     },
//     flag: "\uD83C\uDDE8\uD83C\uDDF1",
//     maps: {
//       googleMaps: "https://goo.gl/maps/XboxyNHh2fAjCPNn9",
//       openStreetMaps: "https://www.openstreetmap.org/relation/167454",
//     },
//     population: 19116209,
//     gini: { 2017: 44.4 },
//     fifa: "CHI",
//     car: { signs: ["RCH"], side: "right" },
//     timezones: ["UTC-06:00", "UTC-04:00"],
//     continents: ["South America"],
//     flags: ["https://flagcdn.com/cl.svg", "https://flagcdn.com/w320/cl.png"],
//   },
// ];
