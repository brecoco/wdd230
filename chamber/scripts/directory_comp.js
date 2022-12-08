const requestURL = 'https://brecoco.github.io/wdd230/chamber/json_files/companies_list.json';
const cards = document.querySelector('.cards');



fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const companies = jsonObject['companies'];
    companies.forEach(displayCompanies);
  });


  function displayCompanies(company) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let portrait = document.createElement('img');
    let cAddress = document.createElement('h3');
    let cPhone = document.createElement('h3');
    let cDescription = document.createElement('h4');
    let url = document.createElement('a');
  
    // Change the textContent property of the h2 element to contain the prophet's full name
    h2.textContent = `${company.name}`;
    cAddress.textContent =`${company.address}`;
    cPhone.textContent = `Phone: ${company.telephone}`;
    cDescription.textContent = `${company.description}`;
  
    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    portrait.setAttribute('class', 'portrait')
    portrait.setAttribute('src', company.imageurl);
    portrait.setAttribute('alt', `Portrait of ${company.name}`);
    portrait.setAttribute('loading', 'lazy');
    card.setAttribute('class', 'directoryClass')
    h2.setAttribute('id', 'h2Directory')
    cAddress.setAttribute('id', 'h3Directory')
    cPhone.setAttribute('id', 'h3Directory')
    cDescription.setAttribute('id', 'h4Directory')
    url.textContent = `${company.name}`;
    url.setAttribute('href', company.urlC);
    url.setAttribute('class', 'website')
  
    // Add/append the section(card) with the h2 element
    h2.appendChild(url);
    card.appendChild(h2);
    card.appendChild(cAddress);
    card.appendChild(cPhone);
    card.appendChild(portrait);
    card.appendChild(cDescription);
  
    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.cards').appendChild(card);
  }


