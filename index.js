const options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};
const justYear = {year: 'numeric'};

document.getElementById('date').textContent = new Date (document.lastModified).toLocaleDateString('en-US', options);
document.getElementById('year').textContent = new Date ().toLocaleDateString('en-US', justYear);
