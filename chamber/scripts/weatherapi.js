// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
//const description = document.querySelector('#currently');
const speedWind = document.querySelector('#windSpeed')


const url = 'https://api.openweathermap.org/data/2.5/weather?lat=-23.5489&lon=-46.6388&units=imperial&appid=e2e7a22ba2b5673d386ca35d097ef7c3';


async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // this is for testing the call
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
 
  apiFetch();

function capitalize(string){
    return `${string.charAt(0).toUpperCase()}${string.slice(1)}`;
}

function displayResults(data){
    currentTemp.textContent = `${data.main.temp.toFixed(0)} ºF`;
    speedWind.textContent = `${data.wind.speed} m/h`;
    let desc = capitalize(data.weather[0].description); 
    //description.textContent = desc;
    captionDesc.textContent = `${desc}`;
    weatherIcon.src= `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    weatherIcon.setAttribute('alt', desc);


}



function chillF(currentTemp, windSpeed) {  
  if (currentTemp <= 50 && windSpeed > 3) {
    const chilly = (35.74 + (0.6215 * currentTemp) - (35.75 * windSpeed**0.16) + (0.4275 * temp * wind ** 0.16)).toFixed(1);
    return chilly + `°F`;
  } else{
    return "N/A"
  }
}

document.getElementById("windchill").innerHTML = chillF(currentTemp, windSpeed);


