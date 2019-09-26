async function getCities() {
    
    var cities = await fetch('stad.json')
        .then(response => response.json())
        .catch(error => document.write(error));
    var countries = await fetch('land.json')
        .then(response => response.json())
        .catch(error => document.write(error));
    
    cities.sort((a, b) => a.countryid - b.countryid  || b.population - a.population);
    countries.sort((a, b) => (a.countryname < b.countryname) ? -1 : 1);
    
    var htmlLines = "";

    for (var i = 0; i < countries.length; i++) {

        htmlLines += "<li><h3 style='margin: 15px 0 5px 0'>" + countries[i].countryname + "</h3></li>";

        for (var j = 0; j < cities.length; j++) {
            if (countries[i].id === cities[j].countryid){
                htmlLines += "<li>" + cities[j].stadname + " med " + cities[j].population + " invånare</li>";
            }            
        } 
    }

    document.getElementById("list").innerHTML = htmlLines;
}
    
getCities();
