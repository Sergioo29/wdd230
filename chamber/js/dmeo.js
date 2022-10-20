let temp = 49;
let windspeed = 10;


function setwindchill(temp, windspeed){

let tempobj = document.querySelector("#temperaute");
let windspeedobj = document.querySelector("#windspeed");
let windchilldobj = document.querySelector("#windchill");

let windchillmsg = 'N/A';

if (temp <= 50 &&  windspeed > 3) {
    let chill = 35; // formula is in the assignment
    windchillmsg = `$(chill)&deg; F`;
}

tempobj.textContent = temp;
windspeedobj.textContent = windspeed;
windchilldobj.innerHTML = windchillmsg;

}

setwindchill(49, 10);