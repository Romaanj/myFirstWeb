const API_KEY = "cd0eeed465b86778dd2b484b267ea2af";


function geoOk(position) {
    const lat = position.coords.latitude;
    const long = position.coords.longitude;
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}`;
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        const city = document.querySelector("#weather span:first-child");
        const weather = document.querySelector("#weather span:last-child");

        city.innerText =`🌎 Location : ${data.name}`;
        weather.innerText =`⛅ Today's weather : ${data.weather[0].main}`;
    });
} 

function geoError() {
    alert("You can't provided your weather!!");
}


navigator.geolocation.getCurrentPosition(geoOk,geoError);