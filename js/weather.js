const API_KEY = "402edfc1b82430cccab38d5f2ebd7186";
const onGeoSuccess = (position) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`;    
    fetch(url)
    .then(response => response.json())
    .then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:nth-child(3)");
        const temp = document.querySelector("#weather span:nth-child(5)");
        const humid = document.querySelector("#weather span:nth-child(6)");
        const weatherId = data.weather[0].id;
        const description = weatherDescKo.find(item => Object.keys(item)[0] === `${weatherId}`)?.[weatherId];
        weather.innerText = data.name;
        city.innerText = description;
        temp.innerText = Math.round(data.main.temp);
        humid.innerText = Math.round(data.main.humidity);
    });    
}
const onGeoError = () => {
    alert("위치 정보를 찾을 수 없습니다. 위치 정보 수집을 허용해주세요.");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);