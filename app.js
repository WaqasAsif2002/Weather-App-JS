var latitude = 24.9215084;
var longitude = 67.0260878;


const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=12c97ef68d5f8212c55859416d7d804a`;

let Kelvin = 273.15;

async function getData() {
  try {
    const response = await fetch(url);
    const res = await response.json();

    const windSpeed = res.wind.speed;
    console.log(res);

    const city = res.name;
    console.log(`City: ${city}`);

    const humidity = res.main.humidity;
    console.log(`Humidity: ${humidity}`);

    const temp = res.main.temp;
    const mainTemp = Math.ceil(temp - Kelvin);
    console.log(`Temperature: ${mainTemp}°C`);

    const feelLike = res.main.feels_like;
    const feel = Math.floor(feelLike - Kelvin);
    console.log(`Feels Like: ${feel}°C`);

    console.log(`Wind Speed: ${windSpeed}`);

    const env1 = res.weather[0].description;
    console.log(`Weather Condition: ${env1}`);


    document.getElementById('condition').innerHTML = `${env1}`;
    document.getElementById('location').innerHTML = `${city}`;
    document.getElementById('temperature').innerHTML = `${mainTemp}°C`;
    document.getElementById('details').innerHTML = `Feel Like: ${feel}°C | Humidity: ${humidity}%`;

  } catch (error) {
    console.log('Error fetching data:', error);
  }
}

setTimeout(() => {
  getData();
}, 1000);
