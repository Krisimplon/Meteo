//API Keys 7b721f0a9e9d92c7b2312b26d8a6bdfb

// ajaxGet("https://www.openweathermap.org/current", function (reponse)

$.ajax({
    url: 'http://api.openweathermap.org/data/2.5/weather?q=cahors&units=metric&APPID=7b721f0a9e9d92c7b2312b26d8a6bdfb',
    type: 'GET',
    dataType: 'json',
})
.done(function(res) {
    //création des variables contenant les résultats de l'API
    var city = (res.name)
    var coordlon = (res.coord.lon)
    var coordlat = (res.coord.lat)
    var temp = (res.main.temp)
    var tempmin = (res.main.temp_min)
    var tempmax = (res.main.temp_max)
    var pressure = (res.main.pressure)
    var humid = (res.main.humidity)
    var wind = (res.wind.speed)
    
    console.log(city, temp, tempmin, tempmax, pressure, humid);
    
    $('#city').html('Ville : '+city);
    $('#place').html('Position : '+coordlat+ ' - '+coordlon);
    $('#temp').html('Température : '+temp+'°C / Min: '+tempmin+'°C / Max: '+tempmax+'°C');
    $('#pression').html('Pression : '+pressure+' hPa');
    $('#humid').html('Humidité : '+humid+'%');
    $('#wind').html('Vent : '+wind+' m/sec');
    //remplacement dynamique des champs html par les résultats recherchés par les variables
    //insertion de la map venant de l'API
    var map = L.map('map1',{ // définition de la map et de son emplacement
        center: [coordlat, coordlon], //donner les coordonées des résultats
        zoom: 13 }); 

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map); //création du calque de la carte
    
    L.marker([coordlat, coordlon]).addTo(map) //création du marqueur
        .bindPopup('Vous êtes ici')
        .openPopup();
})

.fail(function(err) {
    console.log(err);
})

.always(function() { // S'execute dans tous les cas!
console.log("complete");
});



$("#bouton").click(function (formulaire) {
    var requete = $('#search').val();
    
    // var requete = document.querySelector('#search').value
    console.log(requete)
    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?q='+requete+'&units=metric&APPID=7b721f0a9e9d92c7b2312b26d8a6bdfb',
        type: 'GET',
        dataType: 'json',
    })
    .done(function(res) {
        var city = res.name
        var coordlon = res.coord.lon
        var coordlat = res.coord.lat
        var temp = res.main.temp
        var tempmin = res.main.temp_min
        var tempmax = res.main.temp_max
        var pressure = res.main.pressure
        var humid = res.main.humidity
        var wind = res.wind.speed

        //si la map existe, l'effacer pour une nouvelle requête
        if(map) map.remove()
        //recréer une div pour accueillir la new map
        $('#map2').html("<div id='map' style='width: 100%; height: 100%;'></div>");
        
        console.log(city, temp, tempmin, tempmax, pressure, humid);
        
        $('#city2').html('Ville : '+city);
        $('#place2').html('Position : '+coordlat+ ' - '+coordlon);
        $('#temp2').html('Température : '+temp+'°C / Min: '+tempmin+'°C / Max: '+tempmax+'°C');
        $('#pression2').html('Pression : '+pressure+' hPa');
        $('#humid2').html('Humidité : '+humid+'%');
        $('#wind2').html('Vent : '+wind+' m/sec');

        //creation de la map
        //var map = new L.map('map2')
        //creation des layers(calques)
        //var layerMap = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        //   attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
       // })
        //var layerMarker = L.marker([coordlat, coordlon])
        //layerMarker.bindPopup('Vous êtes ici').openPopup();
        //initialisaton de la map et attribution des layers
        //map.setView([coordlat, coordlon], 13)
        

        var map = L.map('map',{
            center: [coordlat, coordlon],
            zoom: 13 });
    
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
        
        L.marker([coordlat, coordlon]).addTo(map)
            .bindPopup('Vous êtes ici')
            .openPopup();

        //création du stockage des villes dans le localstorage
        var stockage = localStorage;
        stockage.setItem(city, JSON.stringify(res)); //JSON va remplacer l'objet par un string
        
    })

    .fail(function(err) {
        console.log(err);
        alert('Recherche impossible')
    })
       
});

