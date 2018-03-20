var weatherstring = document.getElementById("weatherstring");
var currenttemp = document.getElementById("currenttemp");
var windspeed = document.getElementById("windspeed");
var winddirection = document.getElementById("winddirection");
var conditionimg = document.getElementById("conditionimg");
var wforecast = document.getElementById("wforecast");
var conditionsrequestURL = checkConditionsURL();
var forecastrequestURL = checkForecastURL();


function checkConditionsURL(){
	if(window.location.href === 'https://alexandra-derby.github.io/assignments/lesson-10/franklin-10.html'){
		return '//api.wunderground.com/api/69a7489872d284ac/conditions/q/MN/Franklin.json';
	}
	if(window.location.href === 'https://alexandra-derby.github.io/assignments/lesson-10/greenville.html'){
		return '//api.wunderground.com/api/69a7489872d284ac/conditions/q/TX/Greenville.json';
	}
	if(window.location.href === 'https://alexandra-derby.github.io/assignments/lesson-10/springfield.html'){
		return '//api.wunderground.com/api/69a7489872d284ac/conditions/q/OR/Springfield.json';
	}
}
function checkForecastURL(){
	if(window.location.href === 'https://alexandra-derby.github.io/assignments/lesson-10/franklin-10.html'){
		return '//api.wunderground.com/api/69a7489872d284ac/forecast/q/MN/Franklin.json';
	}
	if(window.location.href === 'https://alexandra-derby.github.io/assignments/lesson-10/greenville.html'){
		return '//api.wunderground.com/api/69a7489872d284ac/forecast/q/TX/Greenville.json';
	}
	if(window.location.href === 'https://alexandra-derby.github.io/assignments/lesson-10/springfield.html'){
		return '//api.wunderground.com/api/69a7489872d284ac/forecast/q/OR/Springfield.json';
	}
}

var conditionsrequest = new XMLHttpRequest();
conditionsrequest.open('GET', conditionsrequestURL);
conditionsrequest.responseType = 'json';
conditionsrequest.send();    
conditionsrequest.onload = function() {
	var cityweatherinfo = conditionsrequest.response;
	var weather = cityweatherinfo['current_observation'];
	weatherstring.innerHTML = weather.weather;
	currenttemp.innerHTML = weather.temp_f;
	windspeed.innerHTML = weather.wind_mph;
	winddirection.innerHTML = weather.wind_dir;
	conditionimg.src = weather.icon_url;
}
	
var forecastrequest = new XMLHttpRequest();
forecastrequest.open('GET', forecastrequestURL);
forecastrequest.responseType = 'json';
forecastrequest.send();    
forecastrequest.onload = function() {
	var cityweatherinfo = forecastrequest.response;
	var forecast = cityweatherinfo['forecast'];
	wforecast.innerHTML = forecast.txt_forecast.forecastday[0].fcttext;
}
