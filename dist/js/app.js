$.ajax({url:"https://api.openweathermap.org/data/2.5/weather?q=cahors&units=metric&APPID=7b721f0a9e9d92c7b2312b26d8a6bdfb",type:"GET",dataType:"json"}).done(function(t){var e=t.name,o=t.coord.lon,a=t.coord.lat,i=t.main.temp,n=t.main.temp_min,m=t.main.temp_max,p=t.main.pressure,r=t.main.humidity,l=t.wind.speed;console.log(e,i,n,m,p,r),$("#city").html("Ville : "+e),$("#place").html("Position : "+a+" - "+o),$("#temp").html("Température : "+i+"°C / Min: "+n+"°C / Max: "+m+"°C"),$("#pression").html("Pression : "+p+" hPa"),$("#humid").html("Humidité : "+r+"%"),$("#wind").html("Vent : "+l+" m/sec");var s=L.map("map1",{center:[a,o],zoom:13});L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png",{attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}).addTo(s),L.marker([a,o]).addTo(s).bindPopup("Vous êtes ici").openPopup()}).fail(function(t){console.log(t)}).always(function(){console.log("complete")}),$("#bouton").click(function(t){var e=$("#search").val();console.log(e),$.ajax({url:"https://api.openweathermap.org/data/2.5/weather?q="+e+"&units=metric&APPID=7b721f0a9e9d92c7b2312b26d8a6bdfb",type:"GET",dataType:"json"}).done(function(t){var e=t.name,o=t.coord.lon,a=t.coord.lat,i=t.main.temp,n=t.main.temp_min,m=t.main.temp_max,p=t.main.pressure,r=t.main.humidity,l=t.wind.speed;s&&s.remove(),$("#map2").html("<div id='map' style='width: 100%; height: 100%;'></div>"),console.log(e,i,n,m,p,r),$("#city2").html("Ville : "+e),$("#place2").html("Position : "+a+" - "+o),$("#temp2").html("Température : "+i+"°C / Min: "+n+"°C / Max: "+m+"°C"),$("#pression2").html("Pression : "+p+" hPa"),$("#humid2").html("Humidité : "+r+"%"),$("#wind2").html("Vent : "+l+" m/sec");var s=L.map("map",{center:[a,o],zoom:13});L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png",{attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}).addTo(s),L.marker([a,o]).addTo(s).bindPopup("Vous êtes ici").openPopup();localStorage.setItem(e,JSON.stringify(t))}).fail(function(t){console.log(t),alert("Recherche impossible")})});