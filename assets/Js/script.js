var myApiKey = "abe1408a14d04a7e31fe5a33e505da9a";
var citySearch = document.querySelector("#searchCityInput");
var button = document.querySelector("#searchCityButton");
var searchCityDisplay = document.querySelector("#searchCityDisplay");
var searchHistoryContainer = document.querySelector("#Button");
function formatDate(dateString) {
  const options = { day: 'numeric', month: 'long', year: 'numeric', hour: 'numeric', minute: 'numeric' };
  return new Date(dateString).toLocaleString('en-US', options);
}
function displayWeatherData(city) {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&appid=" +
      myApiKey +
      "&units=imperial"
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      searchCityDisplay.textContent = city;
      document.querySelector("#temp1").textContent =
        "Temp: " + data.main.temp + "F";
      document.querySelector("#wind1").textContent =
        "Wind: " + data.wind.speed + " MPH";
      document.querySelector("#humidity1").textContent =
        "Humidity: " + data.main.humidity + " %";
      document.querySelector("#img1").src =
        "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
      fetch(
        "https://api.openweathermap.org/data/2.5/forecast?lat=" +
          data.coord.lat +
          "&lon=" +
          data.coord.lon +
          "&appid=" +
          myApiKey +
          "&units=imperial"
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          document.querySelector("#temp2").textContent =
            "Temp: " + data.list[5].main.temp + "F";
          document.querySelector("#wind2").textContent =
            "Wind: " + data.list[5].wind.speed + " MPH";
          document.querySelector("#humidity2").textContent =
            "Humidity: " + data.list[5].main.humidity + " %";
          document.querySelector("#img2").src =
            "http://openweathermap.org/img/w/" +
            data.list[5].weather[0].icon +
            ".png";
            document.querySelector("#date2").textContent = formatDate(data.list[5].dt_txt);
          document.querySelector("#temp3").textContent =
            "Temp: " + data.list[13].main.temp + "F";
          document.querySelector("#wind3").textContent =
            "Wind: " + data.list[13].wind.speed + " MPH";
          document.querySelector("#humidity3").textContent =
            "Humidity: " + data.list[13].main.humidity + " %";
          document.querySelector("#img3").src =
            "http://openweathermap.org/img/w/" +
            data.list[13].weather[0].icon +
            ".png";
            document.querySelector("#date3").textContent = formatDate(data.list[13].dt_txt);
          document.querySelector("#temp4").textContent =
            "Temp: " + data.list[21].main.temp + "F";
          document.querySelector("#wind4").textContent =
            "Wind: " + data.list[21].wind.speed + " MPH";
          document.querySelector("#humidity4").textContent =
            "Humidity: " + data.list[21].main.humidity + " %";
          document.querySelector("#img4").src =
            "http://openweathermap.org/img/w/" +
            data.list[21].weather[0].icon +
            ".png";
            document.querySelector("#date4").textContent = formatDate(data.list[21].dt_txt);
          document.querySelector("#temp5").textContent =
            "Temp: " + data.list[29].main.temp + "F";
          document.querySelector("#wind5").textContent =
            "Wind: " + data.list[29].wind.speed + " MPH";
          document.querySelector("#humidity5").textContent =
            "Humidity: " + data.list[29].main.humidity + " %";
          document.querySelector("#img5").src =
            "http://openweathermap.org/img/w/" +
            data.list[29].weather[0].icon +
            ".png";
            document.querySelector("#date5").textContent = formatDate(data.list[29].dt_txt);
          document.querySelector("#temp6").textContent =
            "Temp: " + data.list[37].main.temp + "F";
          document.querySelector("#wind6").textContent =
            "Wind: " + data.list[37].wind.speed + " MPH";
          document.querySelector("#humidity6").textContent =
            "Humidity: " + data.list[37].main.humidity + " %";
          document.querySelector("#img6").src =
            "http://openweathermap.org/img/w/" +
            data.list[37].weather[0].icon +
            ".png";
            document.querySelector("#date6").textContent = formatDate(data.list[37].dt_txt);
        });
    });
}
function handleClick() {
  var city = citySearch.value.trim();
  if (city !== "") {
    displayWeatherData(city);

    var citySearchHistory = JSON.parse(localStorage.getItem("citySearchHistory")) || [];
    citySearchHistory.push(city);
    localStorage.setItem("citySearchHistory", JSON.stringify(citySearchHistory));

    var citySearchButton = document.createElement("button");
    citySearchButton.textContent = city;
    searchHistoryContainer.appendChild(citySearchButton);
    citySearchButton.addEventListener("click", function() {
      displayWeatherData(city);
    });

    citySearch.value = "";
  }
}

button.addEventListener("click", handleClick);

var citySearchHistory = JSON.parse(localStorage.getItem("citySearchHistory")) || [];
citySearchHistory.forEach(function(city) {
  var citySearchButton = document.createElement("button");
  citySearchButton.textContent = city;
  searchHistoryContainer.appendChild(citySearchButton);
  citySearchButton.addEventListener("click", function() {
    displayWeatherData(city);
  });
});