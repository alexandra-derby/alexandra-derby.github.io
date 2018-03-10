var franklinmotto = document.getElementById("franklin-motto");
var franklinfounded = document.getElementById("franklin-founded");
var franklinpopulation = document.getElementById("franklin-population");
var franklinrainfall = document.getElementById("franklin-rainfall");

var springfieldmotto = document.getElementById("springfield-motto");
var springfieldfounded = document.getElementById("springfield-founded");
var springfieldpopulation = document.getElementById("springfield-population");
var springfieldrainfall = ("springfield-rainfall");

var greenvillemotto = document.getElementById("greenville-motto");
var greenvillefounded = document.getElementById("greenville-founded");
var greenvillepopulation = document.getElementById("greenville-population");
var greenvillerainfall = document.getElementById("greenville-rainfall");

var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
    var towninfo = request.response;
    var towns = towninfo['towns'];
        franklinmotto.innerHTML = towns[0].motto;
        franklinfounded.innerHTML = towns[0].yearFounded;
        franklinpopulation.innterHTML = towns[0].currentPopulation;
        franklinrainfall.innerHTML = towns[0].averageRainfall;
    
        sprinfieldmotto.innerHTML = towns[3].motto;
        springfieldfounded.innerHTML = towns[3].yearFounded;
        springfieldpop.innerHTML = towns[3].currentPopulation;
        springfieldrainfall.innerHTML = towns[3].averageRainfall;

        greenvillemotto.innerHTML = towns[1].motto;
        greenvillefounded.innerHTML = towns[1].yearFounded;
        greenvillepop.innerHTML = towns[1].currentPopulation;
        greenvillerainfall.innerHTML = towns[1].averageRainfall;

}
