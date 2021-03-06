let tempDescription = document.querySelector(".temperature-description");
let tempDegree = document.querySelector(".temperature-degree");
let locTimezone = document.querySelector(".location-timezone");

const weatherApp = function () {
  let long;
  let lat;
  let apiKey = "181e0732d94518f562e8dae35d5e4b75";

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      long = position.coords.longitude;
      lat = position.coords.latitude;

      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=${apiKey}`
      )
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          console.log(data);
          const { temp } = data.main;
          const { main } = data.weather[0];

          tempDegree.textContent = temp + "°";
          tempDescription.textContent = main;
          locTimezone.textContent = data.name;
        });
    });
  }
};

window.addEventListener("load", weatherApp);
