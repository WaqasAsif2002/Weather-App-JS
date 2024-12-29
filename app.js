var latitude = 24.9215084;
var longitude = 67.0260878;
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=244006e372fb520e56e50b3032f7bcf1
`;
let Kelvin = 273.15;
async function getData() {
    try {
      await fetch(url)
        .then((data) => data.json())
        .then((res) => {
        
          const windSpeed = res.wind.speed;
        console.log(res)
        const city = res.name;
        console.log(`city ${city}`)
        const  humidity = res.main.humidity;
        console.log(`humidity ${humidity}`)
        const temp = res.main.temp;
        const mainTemp = Math.ceil(temp-Kelvin) 
        console.log(`temprature : ${mainTemp}`)
        const feelLike = res.main.feels_like
        const feel = Math.floor(feelLike-Kelvin) 
        console.log(`feellike: ${feel}`)
        console.log(`Wind Speed:, ${windSpeed}`);
        const env1 = res.weather[0].description;
        console.log(env1)

        // get data 
        document.getElementById('condition').innerHTML = `${env1}`
        document.getElementById('location').innerHTML = `${city}`
        document.getElementById('temperature').innerHTML = `${mainTemp}°C`

        document.getElementById('details').innerHTML = `Feel Like ${feel} || Humidity ${humidity}`




        })
        .catch((error) => console.log(error));
    } catch (error) {
      console.log(error);
    }
  }


setTimeout(() => {
        getData()
}, 1000);








// let humidity = 0
// let windspeed = 0
// const SetCity = document.getElementById('location')
// SetCity.innerHTML = `Weather City is ${cityName}`
// document.getElementById('details').innerHTML = `Humidity is ${humidity} || Wind Speed is ${windspeed}`
