let weather = {
    apiKey: "a67036a0b30fda335730ecf6aaadc39b",
    fetchWeather: function (city) {
      fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          city +
          "&units=metric&appid=" +
          this.apiKey
      )
        .then((response) => {
          if (!response.ok) {
            alert("No weather found.");
            throw new Error("No weather found.");
          }
          return response.json();
        })
        .then((data) => this.displayWeather(data));
    },

    displayWeather: function (data) {
      const { name } = data;
      const { icon, description } = data.weather[0];
      const { temp, humidity } = data.main;
      const { speed } = data.wind;
      document.querySelector(".city").innerText = "Weather in " + name;
   
      
      document.querySelector(".icon").src =
        "https://openweathermap.org/img/wn/" + icon + ".png";
      document.querySelector(".description").innerText = description;
      document.querySelector(".temp").innerText = temp + " °C";
      document.querySelector(".humidity").innerText =
        "Humidity: " + humidity + "%";
      document.querySelector(".wind").innerText =
        "Wind speed: " + speed + " km/h";
      document.querySelector(".weather").classList.remove("loading");
      document.body.style.backgroundImage =
        "url('https://picsum.photos/3000/2000/?blur=2')";
    },
    search: function () {
      this.fetchWeather(document.querySelector(".search-bar").value);
    },
    
  };






  let ip = {

    fetchIp: function () {
      fetch("https://api.ipify.org?format=json").then((response) => {
      if (!response.ok) {
        alert("No ip found.");
        throw new Error("No ip found.");
      }
      return response.json();
    })
    .then((data) => this.displayIp(data))
    
    
  },

    displayIp: function (data) {
      const { ip } = data.ip;
      document.querySelector(".ip").innerText = "Ip is " + data.ip;
      console.log(ip, "Ipa9988");
      document.body.style.backgroundImage =
        "url('https://picsum.photos/3000/2000/?blur=2')";
    },
   

    
  };

  
  weather.fetchWeather("Belmopan");
  ip.fetchIp();
  console.log(weather, "eweww");
  console.log(ip, "Ipa9988");