window.onload = event => {
    ageCal();
}

function ageCal() {
    var date = new Date();
    var dob = new Date('25 October 2002, 10:19:00 GMT+7:00');
    var ageInMilliseconds = date - dob;
    var ageInYears = date.getFullYear() - dob.getFullYear();
    var ageInMonths = date.getMonth() - dob.getMonth();
    if (ageInMonths < 0) {
        ageInMonths = 12 + ageInMonths;
        ageInYears--;
    }
    var ageInDays = date.getDate() - dob.getDate();
    if (ageInDays < 0) {
        ageInDays = 30 + ageInDays;
        ageInMonths--;
    }
    var ageInWeeks = Math.floor(ageInDays / 7);
    var ageInHours = date.getHours() - dob.getHours();
    if (ageInHours < 0) {
        ageInHours = 24 + ageInHours;
        ageInDays--;
    }
    var ageInMinutes = date.getMinutes() - dob.getMinutes();
    if (ageInMinutes < 0) {
        ageInMinutes = 60 + ageInMinutes;
        ageInHours--;
    }
    var ageInSeconds = date.getSeconds() - dob.getSeconds();
    if (ageInSeconds < 0) {
        ageInSeconds = 60 + ageInSeconds;
        ageInMinutes--;
    }
    // Display Results
    display(ageInYears, ageInMonths, ageInWeeks, ageInDays, ageInHours, ageInMinutes, ageInSeconds);
}

function display(year, month, week, day, hour, min, sec) {
    let span = document.querySelectorAll("span");
    span[0].textContent = year
    span[1].textContent = month
    span[2].textContent = week
    span[3].textContent = day
    span[4].textContent = hour
    span[5].textContent = min
    span[6].textContent = sec
    td[3].textContent = month + " Months"
    td[3].textContent = week + " Weeks"
    td[4].textContent = day.toLocaleString("en-US") + " Days"
    td[5].textContent = hour.toLocaleString("en-US") + " Hours"
    td[6].textContent = min.toLocaleString("en-US") + " Minutes"
    td[7].textContent = sec.toLocaleString("en-US") + " Seconds"
}
