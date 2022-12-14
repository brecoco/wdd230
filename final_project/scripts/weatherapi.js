const url = 'https://api.openweathermap.org/data/2.5/forecast?lat=33.158092&lon=-117.350594&units=imperial&appid=e2e7a22ba2b5673d386ca35d097ef7c3';


// select HTML elements in the document
const cTemp = document.querySelector(".cTemp");
const cCond = document.querySelector(".cCond");
const imageIcon = document.querySelector(".weatherIcon");
const humidity = document.querySelector(".cHum");
const forecast = document.querySelector(".DailyForecast");
const threeDay = document.querySelector(".threeDay");

const tempday1 = document.createElement("p")
const tempday2 = document.createElement("p")
const tempday3 = document.createElement("p")
const day1 = document.createElement("p");
const day2 = document.createElement("p");
const day3 = document.createElement("p");
const cond1 = document.createElement("p");
const cond2 = document.createElement("p");
const cond3 = document.createElement("p");
const hum1 = document.createElement("p");
const hum2 = document.createElement("p");
const hum3 = document.createElement("p");

const image = document.createElement("img");
const img1 = document.createElement("img");
const img2 = document.createElement("img");
const img3 = document.createElement("img");

const imagesrc = document.createElement('src');
const iconsrc1 = document.createElement("src");
const iconsrc2 = document.createElement("src");
const iconsrc3 = document.createElement("src");

const imageAlt = document.createElement('alt');
const alt1 = document.createElement("alt");
const alt2 = document.createElement("alt");
const alt3 = document.createElement("alt");

const divContainer = document.createElement("div")
const div1 = document.createElement("div");
const div2 = document.createElement("div");
const div3 = document.createElement("div");




async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const carlsbadData = await response.json();
      console.log(carlsbadData);
      displayResults(carlsbadData);
    } else {
      throw Error(await response.text());
    }
  } catch(error) {
    console.log(error.message);
  }
}


function getDate(dtText) {
  const [datePart] = dtText.split(' ');
  const [year, month, day] = datePart.split('-');
  const date = new Date(+year, month - 1, +day).toDateString();
  return date;
}

function displayResults(weatherData) {
  const temp = Math.round(`${weatherData.list[0].main.temp}`);
  cTemp.innerHTML ="Current Temp: "+ temp + "°F";
  cCond.innerHTML = capitalize(`${weatherData.list[0].weather[0].description}`);
  const iconSRC = `https://openweathermap.org/img/w/${weatherData.list[0].weather[0].icon}.png`;
  const alt = capitalize(`${weatherData.list[0].weather[0].description} icon`);
  humidity.innerHTML = `${weatherData.list[0].main.humidity} %`;
  const date1 = `${weatherData.list[0].dt_txt}`;
  const date2 = `${weatherData.list[7].dt_txt}`;
  const date3 = `${weatherData.list[15].dt_txt}`;
  const day1 = getDate(date1);
  const day2 = getDate(date2);
  const day3 = getDate(date3);
  const  iconsrc1 = `https://openweathermap.org/img/w/${weatherData.list[1].weather[0].icon}.png`;
  const  iconsrc2= `https://openweathermap.org/img/w/${weatherData.list[2].weather[0].icon}.png`;
  const  iconsrc3= `https://openweathermap.org/img/w/${weatherData.list[3].weather[0].icon}.png`;


  
function capitalize(string) {
  return `${string.charAt(0).toUpperCase()}${string.slice(1)}`;
}
  
  tempday1.innerHTML =  `Min:${Math.round(weatherData.list[1].main.temp_min)} °F - Max:${Math.round(weatherData.list[1].main.temp_max)} °F`;
  tempday2.innerHTML =  `Min:${Math.round(weatherData.list[2].main.temp_min)} °F - Max:${Math.round(weatherData.list[2].main.temp_max)} °F`;
  tempday3.innerHTML =  `Min:${Math.round(weatherData.list[3].main.temp_min)} °F - Max:${Math.round(weatherData.list[3].main.temp_max)} °F`;

  const alt1 = capitalize(`${weatherData.list[1].weather[0].description} icon`);
  const alt2 = capitalize(`${weatherData.list[2].weather[0].description} icon`);
  const alt3 = capitalize(`${weatherData.list[1].weather[0].description} icon`);

  cond1.innerHTML = capitalize(`${weatherData.list[1].weather[0].description}`);
  cond2.innerHTML = capitalize(`${weatherData.list[2].weather[0].description}`);
  cond3.innerHTML = capitalize(`${weatherData.list[3].weather[0].description}`);

  hum1.innerHTML = `Humidity: ${weatherData.list[1].main.humidity} %`;
  hum2.innerHTML = `Humidity: ${weatherData.list[2].main.humidity} %`;
  hum3.innerHTML = `Humidity: ${weatherData.list[3].main.humidity} %`;
  
  image.setAttribute('class', 'imageIcon');
  image.setAttribute('src', iconSRC);
  image.setAttribute('alt', alt);

  img1.setAttribute('class', 'img1');
  img1.setAttribute('src', iconsrc1);
  img1.setAttribute('alt', alt1);

  img2.setAttribute('class', 'img2');
  img2.setAttribute('src', iconsrc2);
  img2.setAttribute('alt', alt2)

  img3.setAttribute('class', 'img3');
  img3.setAttribute('src', iconsrc3);
  img3.setAttribute('alt', alt3);

  divContainer.setAttribute('class', 'foreContainer');
  div1.setAttribute('class', 'childContainer');
  div2.setAttribute('class', 'childContainer');
  div3.setAttribute('class', 'childContainer');

  img1.setAttribute('class', 'foreContent');
  img2.setAttribute('class', 'foreContent');
  img3.setAttribute('class', 'foreContent');

  tempday1.setAttribute('class', 'foreContent');
  tempday2.setAttribute('class', 'foreContent');
  tempday3.setAttribute('class', 'foreContent');

  cond1.setAttribute('class', 'foreContent');
  cond2.setAttribute('class', 'foreContent');
  cond3.setAttribute('class', 'foreContent');

  hum1.setAttribute('class', 'foreContent');
  hum2.setAttribute('class', 'foreContent');
  hum3.setAttribute('class', 'foreContent');


  imageIcon.appendChild(image);
  image.appendChild(imagesrc);
  image.appendChild(imageAlt);

  threeDay.appendChild(divContainer);

  divContainer.appendChild(div1);
  divContainer.appendChild(div2);
  divContainer.appendChild(div3);

  div1.append(day1);
  div1.append(cond1);
  div1.append(img1);
  div1.appendChild(tempday1);
  div1.append(hum1);

  div2.append(day2);
  div2.append(cond2);
  div2.append(img2);
  div2.appendChild(tempday2)
  div2.append(hum2);

  div3.append(day3);
  div3.append(cond3);
  div3.append(img3);
  div3.appendChild(tempday3)
  div3.append(hum3);
}

apiFetch();
