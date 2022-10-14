const options = {day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit'};
const justYear = {year: 'numeric'};
const todayDate = {day:'numeric', month: 'long', year: 'numeric'};


document.getElementById('date').textContent = new Date (document.lastModified).toLocaleDateString('en-US', options);
document.getElementById('year').textContent = new Date ().toLocaleDateString('en-US', justYear);
document.querySelector('.today').textContent = new Date ().toLocaleDateString('en-US', todayDate);