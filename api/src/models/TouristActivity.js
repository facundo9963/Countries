const { DataTypes, Op } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("TouristActivity", {
    name: {
      type: DataTypes.STRING,
      allowNull:false,
    },
    difficulty:{
        type: DataTypes.INTEGER,
      allowNull:false,
      validate:{
        [Op.between]: [1,5]
      }
    },
    duration:{
        type: DataTypes.INTEGER,
      allowNull:false,
    },
    season:{
        type: DataTypes.ENUM('summer','winter','spread', 'autumn'),
        allowNull:false,
    }
  });
};