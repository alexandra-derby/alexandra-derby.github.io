var weatherstring = document.getElementById("weatherstring");
var currenttemp = document.getElementById("currenttemp");
var windspeed = document.getElementById("windspeed");
var winddirection = document.getElementById("winddirection");
var conditionimg = document.getElementById("conditionimg");
var windchill = document.getElementById("windchill");
var wforecast = document.getElementById("wforecast");

var conditionsrequestURL = 'http://api.wunderground.com/api/69a7489872d284ac/conditions/q/MN/Franklin.json';
var forecastrequestURL = 'http://api.wunderground.com/api/69a7489872d284ac/forecast/q/MN/Franklin.json';

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
	windchill.innerHTML = weather.windchill_f;
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
