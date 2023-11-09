var btn = document.getElementById("btn");
var info = document.getElementById("weather-info");
var apikey = "94e4153b2ada1d90b4a124042f1dd7da"

btn.addEventListener("click",function(){
    var input = document.getElementById("cityInput").value;

    if (input === ""){
        window.alert("Enter a city name");
    }else{
        var request = new XMLHttpRequest();

        request.open('GET',("https://api.openweathermap.org/data/2.5/weather?q=" + input + "&appid=" + apikey + "&units=metric"));
        request.onload = function() {
            var data = JSON.parse(request.responseText);
            var line1 = document.createElement("p");
            var line2 = document.createElement("p");

            line1.innerHTML = "The weather in " + input + " is " + data.weather[0].description + ".";
            line2.innerHTML = "The temperature is " + data.main.temp + "°C with a wind speed of " + data.wind.speed + "m/s.<hr>";
            info.insertBefore(line2,info.firstChild);
            info.insertBefore(line1,info.firstChild);
            input.innerhtml = "";
        };
        request.onerror = function() {
            window.alert("Error " + request.status + ": " + request.statusText);
        }
        request.send();
    }
})