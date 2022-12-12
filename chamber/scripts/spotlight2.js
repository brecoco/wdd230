const requestURL = 'https://brecoco.github.io/wdd230/chamber/json_files/companies_list.json';
const spotlight2 = document.querySelector('.spotlight2');



fetch(requestURL)
.then(function(response) {
  return response.json();
})
.then(function (jsonObject) {
  console.table(jsonObject);  // temporary checking for valid response and data parsing
  const companies = jsonObject['companies'];
  result = companies.filter(obj=> obj.member == "gold" || obj.member == "silver");
  // Get 2 random memberships from result
  randSpotLight = getmultRandom(result, 1);
  randSpotLight.forEach(displayspotlights);
});
function getmultRandom(arr, num) {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, num);
}

 // create tag and arrange them in order of parentage for index page (spotlight section)
 function displayspotlights(company) {
  let mbmCompany = document.createElement('div');
  let h2 = document.createElement('h2');
  h2.setAttribute('class', 'box-titles')

  let picture = document.createElement('picture');
  let img = document.createElement('img');
  let altIMG = document.createElement('alt');
  let paraQuote = document.createElement('p');
  let paraAddress = document.createElement('p');
  let paraPhone = document.createElement('p');
  let spotA = document.createElement('a');

  // h3.textContent = `${spotlightDirectory.businessName}`;
  h2.setAttribute('class', 'box-titles')
  spotA.setAttribute('href', company.urlC);
  spotA.setAttribute('class', 'h3spot');
  spotA.textContent = `${company.name}`;
  picture.setAttribute('class', 'spotPicture');
  img.setAttribute('src', company.imageurl);
  img.setAttribute('alt', altIMG);
  img.setAttribute('loading', 'lazy');
  img.setAttribute('id', 'congressimg');
  // imgs.setAttribute('width', )
  altIMG.innerHTML = `${company.name} logo`;
  paraQuote.textContent = `${company.description}`;
  paraQuote.setAttribute('class', 'spotlightquote');
  paraAddress.textContent = `${company.address}`;
  paraPhone.textContent = `${company.telephone}`;

  h2.appendChild(spotA);
  mbmCompany.appendChild(h2);
  picture.appendChild(img);
  mbmCompany.appendChild(picture);
  mbmCompany.appendChild(paraQuote);
  mbmCompany.appendChild(paraAddress);
  mbmCompany.appendChild(paraPhone);
  

  document.querySelector('div.spotlight2').appendChild(mbmCompany);


}
