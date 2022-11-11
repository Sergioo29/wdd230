function displayCards(card){
    let cardview = document.querySelector("#cardview");
    let card = document.createElement("div");
    card.innerHTML = `
    <img src="${card.imageURL}">
    
    
    
    
    `
    
    
    /* <p>Address</p>
        <p>Phone</p>
        <p>Website</p> */
};

function displayList{

};






const requestURL = './data/business.json';


fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const bizlist = jsonObject['businesses'];
    bizlist.forEach(displayCards);
    bizlist.forEach(displayList);

  });