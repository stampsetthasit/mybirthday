window.onload = event => {
    ageCal();
    ageIn();
}

const dob = new Date('25 October 2002, 10:19:00 GMT+7:00');
let span = document.querySelectorAll("span");
let td = document.querySelectorAll("td");
const {resultMonths, resultDays, resultHours, resultMinutes, resultSeconds} = ageIn();


function ageCal() {
    var date = new Date();
    var dob = new Date('25 October 2002, 10:19:00 GMT+7:00');
    var ageInMilliseconds = date - dob;

    var milliseconds = ageInMilliseconds;
    var second = 1000;
    var minute = second * 60;
    var hour = minute * 60;
    var day = hour * 24;
    var month = day * 30;
    var year = day * 365;

    var resultYears = Math.floor(milliseconds / year);
    var resultMonths = Math.floor((milliseconds % year) / month);
    var resultDays = Math.floor((milliseconds % month) / day);
    var resultHours = Math.floor((milliseconds % day) / hour);
    var resultMinutes = Math.floor((milliseconds % hour) / minute);
    var resultSeconds = Math.floor((milliseconds % minute) / second);

    // Display Results
    display(resultYears, resultMonths, resultDays, resultHours, resultMinutes, resultSeconds);
}

function display(year, month, day, hour, min, sec, ageMonth, ageDay, ageHour, ageMinute, ageSecond) {
    span[0].textContent = year
    span[1].textContent = month
    span[2].textContent = day
    span[3].textContent = year
    span[4].textContent = month
    span[5].textContent = day
    span[6].textContent = hour
    span[7].textContent = min
    span[8].textContent = sec
    td[3].textContent = ageMonth + " Months"
    td[4].textContent = ageDay.toLocaleString("en-US") + " Days"
    td[5].textContent = ageHour.toLocaleString("en-US") + " Hours"
    td[6].textContent = ageMinute.toLocaleString("en-US") + " Minutes"
    td[7].textContent = ageSecond.toLocaleString("en-US") + " Seconds"
}