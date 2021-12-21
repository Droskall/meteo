let btnChearch = $('#btnEnter');
let divResume = $("#resume");

btnChearch.on('click', ()=> {

    let city = $("#input").val();

    $.ajax({
        url: "https://api.openweathermap.org/data/2.5/weather?q="+ city +"&units=metric&lang=fr&appid=4711dd873ab37e925e454dd1a9138fc0",
        method: "GET",
        dataType: "json"
    })

        .done(function (response){
            divResume.html(city + "<br>" + "<br>" + "Température : " + Math.ceil(response.main.temp)+"°C" + "<br>"
            + "Min : " + Math.ceil(response.main.temp_min) + "°C " + " Max : " + Math.ceil(response.main.temp_max)
                + "°C, " + "ressentie : " + Math.ceil(response.main.feels_like) + "°C" + "<br>" + "<br>"
                + response.weather[0].description + "<br>" + "Humidité : " + response.main.humidity +" %" + "<br>" +
                "Vent : " + response.wind.speed + " km/h" + "<br>"
            );
        })
});

let btnReset = $('#reset');
btnReset.on('click', () => {
    location.reload();
});