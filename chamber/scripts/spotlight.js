const requestURL = 'https://brecoco.github.io/wdd230/chamber/json_files/companies_list.json';
const mbmCompany = document.querySelector('.mbmCompanies');



fetch(requestURL)
.then(function(response) {
  return response.json();
})
.then(function (jsonObject) {
  console.table(jsonObject);  // temporary checking for valid response and data parsing
  const companies = jsonObject['companies'];
  result = companies.filter(obj=> obj.member == "gold" || obj.member == "silver");
  randSpotLight = getmultRandom(result, 3);
  randSpotLight.forEach(displayspotlights);
});
function getmultRandom(arr, num) {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, num);
}
 function displayspotlights(company) {


  //div company
  let mbmCompany = document.createElement('div');
  mbmCompany.setAttribute('class', 'mbmCompanybox')


  //company name
  let h2 = document.createElement('h2');
  h2.setAttribute('class', 'box-titles')
  let url = document.createElement('a');
  url.setAttribute('href', company.urlC);
  url.setAttribute('class', 'website');
  url.textContent = `${company.name}`;
  h2.appendChild(url);
  mbmCompany.appendChild(h2);




  //company pic
  let portrait = document.createElement('img'); 
  portrait.setAttribute('class', 'portrait')
  portrait.setAttribute('src', company.imageurl);
  portrait.setAttribute('alt', `Portrait of ${company.name}`);
  portrait.setAttribute('loading', 'lazy');
  mbmCompany.appendChild(portrait);



  //company quote
  let cDescription = document.createElement('p');
  cDescription.textContent = `${company.description}`;
  cDescription.setAttribute('id', 'h4Directory');
  mbmCompany.appendChild(cDescription);


  //company address
  let cAddress = document.createElement('h3');
  cAddress.textContent = `${company.address}`;
  mbmCompany.appendChild(cAddress);
  cAddress.setAttribute('id', 'h3Directory')


  //company phone
    let cPhone = document.createElement('h3'); 
  cPhone.textContent = `${company.telephone}`;
  cPhone.setAttribute('id', 'h3Directory')
  mbmCompany.appendChild(cPhone);


  
  let lineH = document.createElement('hr');
  mbmCompany.appendChild(lineH);
  

  document.querySelector('div.mbmCompanies').appendChild(mbmCompany);


}
