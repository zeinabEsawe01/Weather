
const weather = new Weather()
const render = new Renderer() 

function renderSavedData(){
weather.loadAllCities().then((cities) =>{
    render.renderSavedCities(cities)
})
}


const  Search = function(){
    let cityName = $("#cityname").val()
    cityName = cityName.charAt(0).toUpperCase() + cityName.slice(1)
    weather.loadSpecificCity(cityName).then((city) =>{
        if(typeof city === "object")
        {
            render.renderSpecificCity(city)
        }
        else{
            alert(city)
        }
    })
}

$("#show-savedCity").on("click" , "#remove" , function(){
    let cityName = $(this).data().name
    weather.deleteCity(cityName)
    alert(`You had delete ${cityName} from your favorite`)
    location.reload()
})


$("#show-weather").on("click" , "#save" , function(){
    let cityName = $(this).data().name
    weather.saveCity(cityName).then(()=>{
        alert(`You saved ${cityName} to your FAVORITE `);
        location.reload()
    }).catch(err)
        console.log(err);
})
renderSavedData()