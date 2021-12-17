let btnChearch = document.getElementById('btnEnter');

btnChearch.addEventListener('click', ()=> {
    let divResume = document.getElementById("resume");
    let city = document.getElementById("input").value;
    let requesturl = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&lang=fr&appid=4711dd873ab37e925e454dd1a9138fc0";
    let xhr = new XMLHttpRequest();
})

