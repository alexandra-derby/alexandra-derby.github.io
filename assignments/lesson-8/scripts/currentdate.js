var d = new Date();
var day = d.getDay();
var dayArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var date = d.getDate();
var month = d.getMonth();
var monthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var year = d.getFullYear();

document.getElementById("currentdate").innerHTML = dayArray[day] + ", " + date + " " + monthArray[month] + " "  + year;