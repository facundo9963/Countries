var express = require("express");


var router = express.Router();

const { TouristActivity, countryTouristActivity, Country } = require("../db");

router.post("/", async function (req, res){

    try {
        const{countries, name, difficulty, duration, season}=req.body;
        

        const [activity, created]= await TouristActivity.findOrCreate({
            where: { 
                name: name,
                difficulty:difficulty,
                duration:duration,
                season:season,
             },
        });
        
        const newCountries= countries.flat()
        console.log(newCountries)


        await activity.addCountries(newCountries)



        res.sendStatus(200); 
    } catch (error) {
        res.status(201).json(console.log(error))
    }
})
router.get("/", async function (req,res){
    try {
        const data= await TouristActivity.findAll({
            attributes:["name"]
        });
        let names=[]
        data.forEach((el)=> names.push(el.name))
        res.json(names)
    } catch (error) {
        res.sendStatus(403)
    }
    

})


module.exports = router;