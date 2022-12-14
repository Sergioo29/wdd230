const options = {day: 'numeric', month: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit'};
const justYear = {year: 'numeric'};


document.getElementById('modif').textContent = new Date (document.lastModified).toLocaleDateString('en-US', options);
document.getElementById('year').textContent = new Date ().toLocaleDateString('en-US', justYear);
