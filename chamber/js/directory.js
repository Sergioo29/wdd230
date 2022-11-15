function displayCard(card){
    let cardview = document.querySelector("#cardview");
    let cardIt = document.createElement("div");
    cardIt.innerHTML = 
      `<img src="${card.imageURL}">
      <p>${card.name}</p>
      <p>${card.street}</p>
      <p>${card.phone}</p>
      <p><a href="${card.website}">website</a></p>`;
    
}

function displayList(list){
  let card = document.createElement("tr");
  card.innerHTML=
  `<td>${list.name}</td>
   <td>${list.street}</td>
   <td>${list.phone}</td>
   <td><a href="${list.website}">website</a></td>`;

   document.querySelector ("#listview table").appendChild(card);
}

const requestURL = './js/data.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const bizlist = jsonObject['companies'];
    bizlist.forEach(displayCard);
    bizlist.forEach(displayList);

  });