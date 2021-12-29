function formatDate(date) {
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let dayIndex = date.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = [dayIndex];
  return `${days[dayIndex]} ${hours}:${minutes}`;
}
function displayWeatherCondition(response) {
  console.log(response.data.name);
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.main.wind
  );
  document.querySelector("#description").innerHTML =
    response.data.weather[0].main;
}
function search(event) {
  event.preventDefault();
  let apiKey = "8ceca234f09bef7110c2d200b10b2503";
  let city = document.querySelector("#city-input").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherCondition);
}
let dateElement = document.querySelector("#date");
let currentTime = new Date();

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

dateElement.innerHTML = formatDate(currentTime);
