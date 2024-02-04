const dateOfBirthday = document.querySelector("#datetime-picker");

const refs = {
  year: document.querySelector(".year"),
  days: document.querySelector("[data-days]"),
  hours: document.querySelector("[data-hours]"),
  minutes: document.querySelector("[data-minutes]"),
  seconds: document.querySelector("[data-seconds]"),
  countdown: document.querySelector(".countdown"),
  preloader: document.querySelector(".preloader"),
  btnStart: document.querySelector(".data-start"),
};

let selectedDate;
let timerId;

// const currentYear = new Date().getFullYear();
// const nextYear = new Date(`June 08 ${currentYear + 1} 00:00:00`);

// dateOfBirthday.innerText = currentYear + 1;

function updateCounter() {
const currentTime = new Date();
const diff = selectedDate - currentTime;

const daysLeft = Math.floor(diff / 1000 / 60 / 60 / 24);
const houersLeft = Math.floor(diff / 1000 / 60 / 60) % 24;
const minutesLeft = Math.floor(diff / 1000 / 60) % 60;
const secondsLeft = Math.floor(diff / 1000) % 60;

refs.days.innerText = daysLeft;
refs.hours.innerText = houersLeft < 10 ? "0" + houersLeft : houersLeft;
refs.minutes.innerText = minutesLeft < 10 ? "0" + minutesLeft : minutesLeft;
    refs.seconds.innerText = secondsLeft < 10 ? '0' + secondsLeft : secondsLeft;
        
}



const options = {
  enableTime: false,
  time_24hr: true,
  defaultDate: new Date(),
    minuteIncrement: 1,
  minDate: "today",
    onClose(selectedDates) {
        selectedDate = new Date(selectedDates[0]);
    console.log(selectedDate);
  },
};


refs.btnStart.addEventListener('click', function () {
    if (!selectedDate) {
        console.log("Please choose a date first!");
        return;
    }
    timerId = setInterval(updateCounter, 1000);

    refs.preloader.remove();
    refs.countdown.style.display = "flex";

    refs.btnStart.disabled = true;
});

flatpickr(dateOfBirthday, options);
