
function displayCard(card){
    
  let cardSec = document.createElement('section');

  let img = document.createElement('img');
  img.setAttribute('src', card.imageurl);
  img.setAttribute('alt', "Temple image");

  let h2 = document.createElement('h2');    
  h2.innerHTML = `${card.name}`;

  let p1 = document.createElement('p');
  p1.innerHTML = `<b>Address:</b> ${card.street}`;

  let p2= document.createElement('p');
  p2.innerHTML = `<b>Phone:</b> ${card.phone}`;

  let p3= document.createElement('p');
  p3.innerHTML = `<b>Email:</b> ${card.email}`;

  let p4= document.createElement('p');
  p4.innerHTML = `<b>Services:</b> ${card.services}`;

  let p5= document.createElement('p');
  p5.innerHTML = `<b>About:</b> ${card.about}`;

  let p6= document.createElement('p');
  p6.innerHTML = `<b>Schedule:</b> ${card.schedule}`;

  let likeButton = document.createElement('div');
  likeButton.innerHTML = `<input class="mycheck" id="check-${card.order}" type="checkbox" onclick="likeTemple(this);"> Like This Temple`;

  cardSec.appendChild(h2);
  cardSec.appendChild(p1);
  cardSec.appendChild(p2);
  cardSec.appendChild(p3);
  cardSec.appendChild(p4);
  cardSec.appendChild(p5);
  cardSec.appendChild(p6);
  cardSec.appendChild(likeButton);
  
  document.querySelector('div.cards').appendChild(img);
  document.querySelector('div.cards').appendChild(cardSec);
}

// First check to see if we need to initialize local storage with an empty array
const LIKES_KEY = "temple-likes";

function initTempleLikes(){
    let likes_string = localStorage.getItem(LIKES_KEY);
    if (likes_string==null){
        likes_string="[]";
        localStorage.setItem(LIKES_KEY, likes_string);
    }
}

// This function handles when a user checks an individual checkbox
// First, it updates the list of "liked" temples by either adding or removing it
// depending on if the box is checked or unchecked.
// push adds an item to a list
// splice removes an item from a list.
// Finally, the new list is put into local storage for later use. 
function likeTemple(item){
    let likes_string = localStorage.getItem(LIKES_KEY);
    let likeslist = JSON.parse(likes_string);
    if (item.checked){
        if (!likeslist.includes(item.id)){
            likeslist.push(item.id);
        }
    }
    else{
        if (likeslist.includes(item.id)){
            likeslist.splice(likeslist.indexOf(item.id), 1);
        }
    }
    localStorage.setItem(LIKES_KEY, JSON.stringify(likeslist));
}

// This function checks an individual box for a like
function displayLike(item){
    let obj = document.getElementById(item);
    obj.checked = true;
}

// Call the init function when the page loads
initTempleLikes();

// Read the JSON file and run the function above ----------------------------------------
const requestURL = './data/data.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const templelist = jsonObject['temples'];
    templelist.forEach(displayCard);

  })
  .then(() => {
    // Turn the string value from local storage into a Java array
    let likes_string = localStorage.getItem(LIKES_KEY);
    let likeslist = JSON.parse(likes_string);            

    // Set the likes
    likeslist.forEach(displayLike);
});
        