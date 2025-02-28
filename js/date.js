const today = new Date();

const dayName = today.toLocaleDateString('en-US', { weekday: 'short' });


const formattedDate = today.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

 document.getElementById("day").textContent = dayName;
 document.getElementById("date").textContent = formattedDate;