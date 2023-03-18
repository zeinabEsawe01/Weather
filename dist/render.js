class Renderer {

    constructor(){}

    renderSavedCities(savedCities){
        $("#show-savedCity").empty()
        const source = $("#savedCity-template").html();
        const template = Handlebars.compile(source);
        let newHTML = template({savedCities: savedCities});
        $("#show-savedCity").empty().append(newHTML);
    }

    renderSpecificCity(cityData){
        const source = $("#city-template").html();
        const template = Handlebars.compile(source);
        let newHTML = template(cityData);
        $("#show-weather").empty().append(newHTML);
    }
}