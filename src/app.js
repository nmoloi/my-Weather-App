let currentTime = document.querySelector("#current-time");
let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let hours = now.getHours();
let minutes = now.getMinutes();

currentTime.innerHTML = `${day} ${hours}:${minutes},`;
let h1 = document.querySelector("h1");
let searchForm = document.querySelector("#search-form");
let searchInput = document.querySelector("#search-input");

function searchCity(event) {
  event.preventDefault();
  h1.innerHTML = `${searchInput.value.toUpperCase()}`;

  let city = searchInput.value;
  let apiKey = `613b83077f10b4c656d2ofbe1faebbet`;
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&unit=metric`;
  axios.get(apiUrl).then(displayTemperature);
}

searchForm.addEventListener("submit", searchCity);

function displayTemperature(response) {
  console.log(response.data);
  let currentTemperature = document.querySelector("#current-temperature");
  currentTemperature.innerHTML = Math.round(response.data.temperature.current);
}
