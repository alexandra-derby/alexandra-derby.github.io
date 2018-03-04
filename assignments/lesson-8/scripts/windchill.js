    var temperature = 78;
    var windspeed = 5;
    
    var windChillVar = 35.74 + (0.6215 * temperature) - (35.75 * windspeed**0.16) + (0.4275 * temperature * windspeed**0.16);

    document.getElementById('windchillTemp').innerHTML = windChillVar.toFixed(2) + " &deg;F";
