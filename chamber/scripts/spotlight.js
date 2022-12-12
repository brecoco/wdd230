const mbmCompanies = document.querySelector('.mbmCompanies');

fetch("../chamber/json_files/companies_list.json")
.then(function(response) {
  return response.json();
})
.then(function (jsonObject) {
  // console.log(jsonObject);
  // assign variable to JSON array
  const companies_list = jsonObject['directory'];
  // Filter for Gold and Silver memberships from spotlightDirectory
  result = companies_list.filter(obj=> obj.member == "gold" || obj.member == "silver");
  // Get 2 random memberships from result
  randSpotLight = getmultRandom(result, 3);
  randSpotLight.forEach(displayspotlights);
});

function getmultRandom(arr, num) {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, num);
}
  
 // create tag and arrange them in order of parentage for index page (spotlight section)
 function displayspotlights(spotlightDirectory) {
  let randSpotLight = [];
  let spotlightDiv = document.createElement('div');
  let h3 = document.createElement('h3');
  let picture = document.createElement('picture');
  let imgs = document.createElement('img');
  let altIMG = document.createElement('alt');
  let paraQuote = document.createElement('p');
  let paraAddress = document.createElement('p');
  let paraPhone = document.createElement('p');
  let spotA = document.createElement('a');

  // h3.textContent = `${spotlightDirectory.businessName}`;
  spotA.setAttribute('href', spotlightDirectory.websiteURL);
  spotA.setAttribute('class', 'h3spot');
  spotA.textContent = `${spotlightDirectory.businessName}`;
  picture.setAttribute('class', 'spotPicture');
  imgs.setAttribute('src', spotlightDirectory.logo);
  imgs.setAttribute('alt', altIMG);
  imgs.setAttribute('loading', 'lazy');
  imgs.setAttribute('class', 'spotlightImg');
  // imgs.setAttribute('width', )
  altIMG.innerHTML = `${spotlightDirectory.businessName} logo`;
  paraQuote.textContent = `${spotlightDirectory.quote}`;
  paraQuote.setAttribute('class', 'spotlightquote');
  paraAddress.textContent = `${spotlightDirectory.address}`;
  paraPhone.textContent = `${spotlightDirectory.phone}`;

  h3.appendChild(spotA);
  spotlightDiv.appendChild(h3);
  picture.appendChild(imgs);
  spotlightDiv.appendChild(picture);
  spotlightDiv.appendChild(paraQuote);
  spotlightDiv.appendChild(paraAddress);
  spotlightDiv.appendChild(paraPhone);
  

  document.querySelector('div.nested').appendChild(spotlightDiv);

}
