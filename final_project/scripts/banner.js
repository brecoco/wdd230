const weekDayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

const todayDate = new Date();
const weekDayName = weekDayNames[todayDate.getDay()];
console.log(dayName);

const bannerDiv = document.getElementById('banner');
const bannerTex = document.getElementById('box-banner');
const bannerCss = document.getElementById('container')
  
function bannerDisplay(date) {
  if (date == "Monday" || date == "Tuesday") {
    console.log("banner");
    bannerDiv.style.display = "block";
    bannerTex.style.display = "block";
  } else {
    bannerDiv.style.display = "none";
    bannerTex.style.display = "none";
    bannerCss.style.gridRow = 'grid-template-rows: 1fr 1% 1fr 1fr 1fr 1fr 1fr 1fr 1fr ;'
    bannerCss.style.color = 'black'
  }
}

bannerDisplay(todaystr);
