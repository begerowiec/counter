const date = "23 Mar 2022 00:27";

const daysEl = document.getElementById("day");
const hoursEl = document.getElementById("hour");
const minsEl = document.getElementById("min");
const secEl = document.getElementById("sec");

function count() {
  const newdate = new Date(date);
  const currentdate = new Date();
  const totalSeconds = (newdate - currentdate) / 1000;
  if (totalSeconds > 0) {
    const sec = Math.floor(totalSeconds) % 60;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const days = Math.floor(totalSeconds / 3600 / 24);

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secEl.innerHTML = formatTime(sec);
  }
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

//initial
count();

//interval
setInterval(count, 1000);
