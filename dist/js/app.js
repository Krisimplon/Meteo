console.log("connect"),$.ajax({url:"http://api.openweathermap.org/data/2.5/weather?q=cahors&units=metric&APPID=7b721f0a9e9d92c7b2312b26d8a6bdfb",type:"GET",dataType:"json"}).done(function(t){var e=t.name,a=t.coord.lon,o=t.coord.lat,i=t.main.temp,p=t.main.temp_min,n=t.main.temp_max,m=t.main.pressure,r=t.main.humidity,l=t.wind.speed;console.log(e,i,p,n,m,r),$("#city").html("City: "+e),$("#place").html("GPS Lon: "+a+" Lat: "+o),$("#temp").html("Température: "+i+"°C / Min: "+p+"°C / Max: "+n+"°C"),$("#pression").html("Pressure: "+m+" hPa"),$("#humid").html("Humidity: "+r+"%"),$("#wind").html("Wind speed: "+l+" m/sec");var s=L.map("map1").setView([51.505,-.09],13);L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png",{attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}).addTo(s),L.marker([51.5,-.09]).addTo(s).bindPopup("A pretty CSS3 popup.<br> Easily customizable.").openPopup()}).fail(function(t){console.log(t)}).always(function(){console.log("complete")}),$("#bouton").click(function(t){var e=$("#search").val();console.log(e),$.ajax({url:"http://api.openweathermap.org/data/2.5/weather?q="+e+"&units=metric&APPID=7b721f0a9e9d92c7b2312b26d8a6bdfb",type:"GET",dataType:"json"}).done(function(t){var e=t.name,a=t.coord.lon,o=t.coord.lat,i=t.main.temp,p=t.main.temp_min,n=t.main.temp_max,m=t.main.pressure,r=t.main.humidity,l=t.wind.speed;console.log(e,i,p,n,m,r),$("#city2").html("City: "+e),$("#place2").html("GPS Lon: "+a+" Lat: "+o),$("#temp2").html("Température: "+i+"°C / Min: "+p+"°C / Max: "+n+"°C"),$("#pression2").html("Pressure: "+m+" hPa"),$("#humid2").html("Humidity: "+r+"%"),$("#wind2").html("Wind speed: "+l+" m/sec");var s=L.map("map2").setView([51.505,-.09],13);L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png",{attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}).addTo(s),L.marker([51.5,-.09]).addTo(s).bindPopup("A pretty CSS3 popup.<br> Easily customizable.").openPopup()})});