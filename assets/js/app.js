//API Keys 7b721f0a9e9d92c7b2312b26d8a6bdfb

// ajaxGet("https://www.openweathermap.org/current", function (reponse)

console.log('connect')

$.ajax({
    url: 'http://api.openweathermap.org/data/2.5/weather?q=cahors&units=metric&APPID=7b721f0a9e9d92c7b2312b26d8a6bdfb',
    type: 'GET',
    dataType: 'json',
})
.done(function(res) {
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
    
    $('#city').html('City: '+city);
    $('#place').html('GPS Lon: '+coordlon+ ' Lat: '+coordlat);
    $('#temp').html('Température: '+temp+'°C / Min: '+tempmin+'°C / Max: '+tempmax+'°C');
    $('#pression').html('Pressure: '+pressure+' hPa');
    $('#humid').html('Humidity: '+humid+'%');
    $('#wind').html('Wind speed: '+wind+' m/sec');

    var map = L.map('map1',{
        center: [coordlon, coordlat],
        zoom: 8 });

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    
    L.marker([51.5, -0.09]).addTo(map)
        .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
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
        
        $('#city2').html('City: '+city);
        $('#place2').html('GPS Lon: '+coordlon+ ' Lat: '+coordlat);
        $('#temp2').html('Température: '+temp+'°C / Min: '+tempmin+'°C / Max: '+tempmax+'°C');
        $('#pression2').html('Pressure: '+pressure+' hPa');
        $('#humid2').html('Humidity: '+humid+'%');
        $('#wind2').html('Wind speed: '+wind+' m/sec');

        //var map = L.map('map2').setView([51.505, -0.09], 13);
        var map = L.map('map2',{
            center: [coordlon, coordlat],
            zoom: 13 });

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([51.5, -0.09]).addTo(map)
    .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    .openPopup();

    })
       
});

