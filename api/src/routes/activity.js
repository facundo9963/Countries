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
        console.log(activity)

         await countries && countries.forEach(country=>{
            countryTouristActivity.findOrCreate({
                where:{
                    countryID:country, //hay que mandar los AAA y no todo el country
                    TouristActivityId:activity.TouristActivityId,
                }
            })
        

        })
        res.sendStatus(200); 
    } catch (error) {
        res.status(201).json(console.log(error))
    }
router.get("/:activity", async(req,res)=>{
    let {activity}= req.params.activity
    try {
        let data= await TouristActivity.findAll({
            where:{
                name:activity
            },
            include:{
                Country
            }
        })
        res.send(data)
    } catch (error) {
        res.sendStatus(404)
    }
    

})

})
module.exports = router;