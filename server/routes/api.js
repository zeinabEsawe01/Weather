const express = require('express')
const router = express.Router()
const Weather = require('../../weather/weather')
const func = require('../utils/functions')

/// Sending city by specified city
router.get('/weather', function(req, res){
    let cityName = req.query.city
    func.isCityExists(cityName).then(function(isExists){
        if(!isExists){
            func.getSpecificCity(cityName).then((cityWeather) =>{
            res.send(cityWeather)
            })
        }else{
            res.send("its in your favorite");
        }
})
})

router.post('/weather' , function(req, res){
    let cityName = req.body.name
    if(cityName === undefined){
        res.status(404).send("city not found")
    }
    func.getSpecificCity(cityName).then(function(city){
        city.save()
        res.send(city)
    })
})

router.get('/savedWeather', function(req, res){
    Weather.find({}).then(function(weather){
        res.send(weather)
    })
})
router.delete('/weather/:cityName', function(req,res){
    let cityName = req.params.cityName
    Weather.findOne({name : cityName}).then(function(city){
        if(city == null){
            res.status(404).send("city not founded")
        }
        else{
            Weather.deleteOne({name: cityName}).then(()=>{
                res.send("deleted")
                })
        }
    })

})

module.exports = router