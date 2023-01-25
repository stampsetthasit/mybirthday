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
    display(ageInYears, ageInMonths, ageInDays, ageInHours, ageInMinutes, ageInSeconds);
}

function display(year, month, day, hour, min, sec) {
    let span = document.querySelectorAll("span");
    span[0].textContent = year
    span[1].textContent = month
    span[2].textContent = day
    span[3].textContent = hour
    span[4].textContent = min
    span[5].textContent = sec
}
