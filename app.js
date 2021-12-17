let btnChearch = document.getElementById('btnEnter');
let divResume = document.getElementById("resume");

btnChearch.addEventListener('click', ()=> {
    let features = "menuba=no, scrollbars=no, width=600, height=500, status=no, toolbar=no";
    myWindow = window.open("TF1 Météo Intro [720p] [2020] [FR].mp4", '', features);

    let city = document.getElementById("input").value;
    let requesturl = "https://api.openweathermap.org/data/2.5/weather?q="+ city +"&units=metric&lang=fr&appid=4711dd873ab37e925e454dd1a9138fc0";
    let xhr = new XMLHttpRequest();
    xhr.open("GET", requesturl);
    xhr.responseType = "json";

    xhr.onload = () => {
        if (xhr.status !== 200){
        }
        let response = xhr.response;

        divResume.innerHTML += city + "<br>";
        divResume.innerHTML += "<br>" + "Température : " + Math.ceil(response.main.temp)+"°C" + "<br>";
        divResume.innerHTML += "Min : " + Math.ceil(response.main.temp_min) + "°C " + " Max : " + Math.ceil(response.main.temp_max)
            + "°C, " + "ressentie : " + Math.ceil(response.main.feels_like) + "°C" + "<br>";
        divResume.innerHTML += "<br>" + response.weather[0].description + "<br>";
        divResume.innerHTML += "Humidité : " + response.main.humidity +" %" + "<br>";
        divResume.innerHTML += "Vent : " + response.wind.speed + " km/h" + "<br>";
    }
    xhr.send();
})

