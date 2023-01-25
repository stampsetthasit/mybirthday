window.onload = event => {
    ageCal();
    ageIn();
}
const dob = new Date('25 October 2002, 10:19:00 GMT+7:00');
let span = document.querySelectorAll("span");
let td = document.querySelectorAll("td");
const {resultMonths, resultDays, resultHours, resultMinutes, resultSeconds} = ageIn();

function ageCal() {
    var date = new Date(),
        day = date.getDate(),
        month = date.getMonth(),
        year = date.getFullYear(),
        hour = date.getHours(),
        minute = date.getMinutes(),
        second = date.getSeconds();

    var mDay = 30 + day - dob.getDate(),
        mMonth = 12 + month - dob.getMonth(),
        mYear = year - 1 - dob.getFullYear(),
        mHour = hour - 1 - dob.getHours(),
        mMinute = 60 + minute - dob.getMinutes();
    
    // CheckDay
    if (mDay >= 30) {
        mDay = 0 + mDay % 30;
        mMonth = mMonth;
    }
    else {
        mDay = mDay;
        mMonth = mMonth;
    }

    // CheckMonth 
    if (mMonth >= 12) {
        mMonth = mMonth % 12;
        mYear += 1;
    }
    else {
        mDay = mDay;
        mMonth = mMonth;
    }

    // CheckHour
    if (mHour >= 24) {
        mHour = mHour % 24;
    }
    else {
        mHour = mHour;
    }

    // CheckMin
    if (mMinute >= 60) {
        mMinute = mMinute % 60;
    }
    else {
        mMinute = mMinute;
    }

    // CheckMin
    if (mMinute < 0) {
        mHour -= 1
        mMinute = 0
    }
    else {
        mMinute = mMinute;
    }

    // Display Results
    display(mYear, mMonth, mDay, mHour, mMinute, second, resultMonths, resultDays, resultHours, resultMinutes, resultSeconds);


    setInterval(ageCal, 1000);
}

function ageIn() {
    var DOB = "25 October 2002";
    var mdob = Date.parse(DOB);
    var mnow = Date.now();
    var ageInMilliseconds = mnow-mdob;

    var milliseconds = ageInMilliseconds;
    var second = 1000;
    var minute = second*60;
    var hour = minute*60;
    var day = hour*24;
    var month = day*30; 
    var year = day*365;

    const resultYears = Math.round(milliseconds/year),
        resultMonths = resultYears*12,
        resultDays = resultYears*365,
        resultHours = Math.round(milliseconds/hour),
        resultMinutes = Math.round(milliseconds/minute),
        resultSeconds = Math.round(milliseconds/second);

    return {resultMonths, resultDays, resultHours, resultMinutes, resultSeconds}
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