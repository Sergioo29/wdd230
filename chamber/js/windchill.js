
function setwindchill(temp, windspeed){

let windspeedobj = document.querySelector("#windspeed");
let windchilldobj = document.querySelector("#windchill");
let chill;

let windchillmsg = 'N/A';

if (temp <= 50 &&  windspeed > 3) {
    chill = Math.round((35.74 + (0.6215 * temp))-(35.75 * Math.pow(windspeed,0.16)) + (0.4275*temp*Math.pow(windspeed,0.16))) + " km/h";
    windchillmsg = chill + " ° F";
};

windspeedobj.textContent = chill;
windchilldobj.textContent = windchillmsg;

};

setwindchill(50, 10);