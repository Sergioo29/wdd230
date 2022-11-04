const visit = document.querySelector("#lvisited");

let visitMessage= "This is your first visit to the page";
let today = new Date();

let lastVisitString = window.localStorage.getItem("last-visit");

if (lastVisitString != null){
    let  lastVisitDate = new Date(lastVisitString);
    let dateDifference = Math.floor((today.getTime() - lastVisitDate.getTime()) / (24 * 60 * 60 * 1000));
    visitMessage = `Last visited ${dateDifference} days ago.`;
}

visit.textContent = visitMessage;
window.localStorage.setItem("last-visit", today.toString()); 