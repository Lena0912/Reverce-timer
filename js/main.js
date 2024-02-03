const year = document.querySelector('.year');

const refs = {
  year: document.querySelector(".year"),
  days: document.querySelector("[data-days]"),
  hours: document.querySelector("[data-hours]"),
  minutes: document.querySelector("[data-minutes]"),
  seconds: document.querySelector("[data-seconds]"),
  countdown: document.querySelector(".countdown"),
  preloader: document.querySelector(".preloader"),
};

const currentYear = new Date().getFullYear();
const nextYear = new Date(`June 08 ${currentYear + 1} 00:00:00`);

year.innerText = currentYear + 1;

function updateCounter() {
const currentTime = new Date();
const diff = nextYear - currentTime;

const daysLeft = Math.floor(diff / 1000 / 60 / 60 / 24);
const houersLeft = Math.floor(diff / 1000 / 60 / 60) % 24;
const minutesLeft = Math.floor(diff / 1000 / 60) % 60;
const secondsLeft = Math.floor(diff / 1000) % 60;

refs.days.innerText = daysLeft;
refs.hours.innerText = houersLeft < 10 ? "0" + houersLeft : houersLeft;
refs.minutes.innerText = minutesLeft < 10 ? "0" + minutesLeft : minutesLeft;
refs.seconds.innerText = secondsLeft < 10 ? '0' + secondsLeft : secondsLeft;

}


setInterval(updateCounter, 1000);

setTimeout(function () {
    refs.preloader.remove();
    refs.countdown.style.display = "flex";
}, 2000);
