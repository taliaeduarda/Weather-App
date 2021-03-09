let tempDescription = document.querySelector(".temperature-description");
let tempDegree = document.querySelector(".temperature-degree");
let locTimezone = document.querySelector(".location-timezone");
let icon = document.querySelector('.icon')

function weatherApp() {
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
          let { temp } = data.main;
          let { description } = data.weather[0];
          let { main } = data.weather[0];
          temp = parseInt(temp)

          tempDegree.textContent = temp + "°";
          tempDescription.textContent = description;
          locTimezone.textContent = data.name;

          if (main === 'Clear') {
            icon.innerHTML = '<i class="fas fa-cloud" aria-hidden="true"></i>';
          }

        });
    });
  }

  // if (main === 'Thunderstorm') {
  //   weatherIcon = 
  // // } else if (main === 'Drizzle') {
  // //   weatherIcon = <FontAwesomeIcon icon={faCloudRain} />;
  // // } else if (main === 'Rain') {
  // //   weatherIcon = <FontAwesomeIcon icon={faCloudShowersHeavy} />;
  // // } else if (main === 'Snow') {
  // //   weatherIcon = <FontAwesomeIcon icon={faSnowflake} />;
  // // } else if (main === 'Clear') {
  // //   weatherIcon = <FontAwesomeIcon icon={faSun} />;
  // } else if (main === 'Clouds') {
  //   weatherIcon = <FontAwesomeIcon icon={faCloud} />;
  // } else {
  //   weatherIcon = <FontAwesomeIcon icon={faSmog} />;
  // }
}

window.addEventListener("load", weatherApp);
