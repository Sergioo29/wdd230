const currentYear = {year: 'numeric'};

document.getElementById('year').textContent = new Date ().toLocaleDateString('en-US', currentYear);
