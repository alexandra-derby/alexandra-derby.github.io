var service1 = document.getElementById("service1");
var service2 = document.getElementById("service2");
var service3 = document.getElementById("service3");
var service4 = document.getElementById("service4");
var service5 = document.getElementById("service5");
var service6 = document.getElementById("service6");
var service7 = document.getElementById("service7");
var service8 = document.getElementById("service8");
var service9 = document.getElementById("service9");
var service10 = document.getElementById("service10");

var price1 = document.getElementById("price1");
var price2 = document.getElementById("price2");
var price3 = document.getElementById("price3");
var price4 = document.getElementById("price4");
var price5 = document.getElementById("price5");
var price6 = document.getElementById("price6");
var price7 = document.getElementById("price7");
var price8 = document.getElementById("price8");
var price9 = document.getElementById("price9");
var price10 = document.getElementById("price10");

var requestURL = 'data/services.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
    var servicesInfo = request.response;
    var services = servicesInfo['services'];
        service1.innerHTML = services[0].service1;
        service2.innerHTML = services[0].service2;
        service3.innerHTML = services[0].service3;
        service4.innerHTML = services[0].service4;
        service5.innerHTML = services[0].service5;
        service6.innerHTML = services[0].service6;
        service7.innerHTML = services[0].service7;
        service8.innerHTML = services[0].service8;
        service9.innerHTML = services[0].service9;
        service10.innerHTML = services[0].service10;
    
        price1.innerHTML = services[1].price1;
        price2.innerHTML = services[1].price2;
        price3.innerHTML = services[1].price3;
        price4.innerHTML = services[1].price4;
        price5.innerHTML = services[1].price5;
        price6.innerHTML = services[1].price6;
        price7.innerHTML = services[1].price7;
        price8.innerHTML = services[1].price8;
        price9.innerHTML = services[1].price9;
        price10.innerHTML = services[1].price10;

}
