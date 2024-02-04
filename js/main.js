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
  altInput: true,
  altFormat: "F j, Y",
  dateFormat: "Y-m-d",
  onClose(selectedDates) {
    selectedDate = new Date(selectedDates[0]);
    console.log(selectedDate);
  },
};


refs.btnStart.addEventListener('click', function () {
    if (!selectedDate) {
        
        return;
    }
    timerId = setInterval(updateCounter, 1000);

    refs.preloader.remove();
    refs.countdown.style.display = "flex";

    refs.btnStart.disabled = true;
    
});

flatpickr(dateOfBirthday, options);
