
class Weather{
    constructor(){
        this.citiesData = []
    }
    
    loadAllCities(){
       return $.get(`/savedWeather`).then(res =>
            { 
                this.citiesData.push(...res)
                return this.citiesData
            })
            
    }

    loadSpecificCity(cityname){
       return $.get(`/weather/?city=${cityname}`).then(function(city){
            return city
        }).catch((error)=>
        {
            return error
        })
    }

    saveCity(cityName){
        return $.post("/weather", { name: cityName });
    }

    deleteCity(cityName){
        $.ajax({
            url: `/weather/${cityName}`,
            type: 'DELETE',
            success: function(result) {
                console.log(result);
            },
            error: function (xhr, text, error) {
                console.log(xhr.responseText);
              },
        });
    }
}

