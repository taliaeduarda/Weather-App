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
          let { description } = data.weather[0];
          let { description: icon } = data.weather[0];
          icon = icon.replace(/ /g, '_').toUpperCase()
          console.log(icon)

          tempDegree.textContent = temp + "°";
          tempDescription.textContent = description;
          locTimezone.textContent = data.name;

          setIcons(icon, document.querySelector('.icon'))
          
          
        });
    });
  }

  function setIcons(icon, iconID) {
    const skycons = new Skycons({color: "black"})
    const currentIcon = icon
    skycons.play()
    return skycons.set(iconID, Skycons[currentIcon])
    
  }
};

window.addEventListener("load", weatherApp);
