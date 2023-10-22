function updateLiveAge() {
  var birthDate = new Date("October 25, 2002");
  var currentDate = new Date();

  var difference = currentDate - birthDate;

  var ageDate = new Date(difference);
  var years = ageDate.getUTCFullYear() - 1970;
  var months = ageDate.getUTCMonth();
  var days = ageDate.getUTCDate() - 1;
  var hours = ageDate.getUTCHours();
  var minutes = ageDate.getUTCMinutes();
  var seconds = ageDate.getUTCSeconds();

  document.getElementById("years-old").innerText = years;
  document.getElementById("months-old").innerText = months;
  document.getElementById("days-old").innerText = days;

  document.getElementById("live-years").innerText = years;
  document.getElementById("live-months").innerText = months;
  document.getElementById("live-days").innerText = days;
  document.getElementById("live-hours").innerText = hours;
  document.getElementById("live-minutes").innerText = minutes;
  document.getElementById("live-seconds").innerText = seconds;
}

function calculateTimeSinceBirth() {
  var birthDate = new Date("October 25, 2002");
  var currentDate = new Date();

  var difference = currentDate - birthDate;

  var seconds = Math.floor(difference / 1000);
  var minutes = Math.floor(seconds / 60);
  var hours = Math.floor(minutes / 60);
  var days = Math.floor(hours / 24);
  var months =
    (currentDate.getFullYear() - birthDate.getFullYear()) * 12 +
    (currentDate.getMonth() - birthDate.getMonth());

  document.getElementById("age-in-months").innerText = months;
  document.getElementById("age-in-days").innerText = days.toLocaleString();
  document.getElementById("age-in-hours").innerText = hours.toLocaleString();
  document.getElementById("age-in-minutes").innerText = minutes.toLocaleString();
  document.getElementById("age-in-seconds").innerText = seconds.toLocaleString();
}

updateLiveAge();
calculateTimeSinceBirth();

setInterval(updateLiveAge, 1000);
