const divClock = document.querySelector("h2#clock");

const updateTime = () => {
    const time = new Date();
    const hour = String(time.getHours()).padStart(2, "0");
    const min = String(time.getMinutes()).padStart(2, "0");
    const sec = String(time.getSeconds()).padStart(2, "0");

    let now = `${hour} : ${min} : ${sec}`;
    divClock.innerHTML = now;
}
updateTime();
setInterval(updateTime, 500);
