var btn = document.getElementById("btn");
var info = document.getElementById("weather-info");
var apikey = "94e4153b2ada1d90b4a124042f1dd7da"

btn.addEventListener("click",function(){
    var input = document.getElementById("cityInput").value;

    if (input === ""){
        window.alert("Enter a city name");
    }else{
        var Request = new XMLHttpRequest();

        Request.open('GET',("https://api.openweathermap.org/data/2.5/weather?q=" + input + "&appid=" + apikey + "&units=metric"));
        Request.onload = function() {
            var data = JSON.parse(Request.responseText);
            
            info.insertBefore((<p>"The temperature is " + data.main.temp + "°C with a wind speed of " + data.wind.speed + "m/s."</p>),info.firstChild);
            info.insertBefore((<p>"The weather in " + input + " is " + data.weather[0].description + "."</p>),info.firstChild);
            input.innerHTML = "";
        };
        Request.send();
    }
})