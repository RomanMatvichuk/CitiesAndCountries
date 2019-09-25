var cities = [{}];
var countries = {};

fetch('stad.json')
    .then(response => response.json())
    .catch(error => document.write(error))
    .then(function(myJson){
        myJson.sort((a, b) => a.countryid - b.countryid  || b.population - a.population);
        cities=myJson;
    })

fetch('land.json')
    .then(response => response.json())
    .catch(error => document.write(error))
    .then(function(myJson){
        myJson.sort((a, b) => (a.countryname < b.countryname) ? -1 : 1);
        countries=myJson;
    })

console.log(cities);
console.log(countries);

var htmlLines = "";

for (let i = 0; i < countries.length; i++) {
    htmlLines += "<li><h3>" + countries[i].countryname + "</h3></li>";
        /* for (let i1 = 0; countries[i].id = cities[i1].countryid; i1++) {
            htmlLines += "<li>" + cities[i1].stadname + " med " + cities[i1].population + " invånare</li>";            
        } */
}

document.getElementById("list").innerHTML = htmlLines;