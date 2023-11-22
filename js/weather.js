const API_KEY = "402edfc1b82430cccab38d5f2ebd7186";
const onGeoSuccess = (position) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;    
    fetch(url)
    .then(response => response.json())
    .then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        weather.innerText = data.name;
        city.innerText = `${data.weather[0].main}, ${data.main.temp}`;    
    });    
}
const onGeoError = () => {
    alert("위치 정보를 찾을 수 없습니다. 위치 정보 수집을 허용해주세요.");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);