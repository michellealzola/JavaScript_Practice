function FahrenheitToCelsius(degree) 
{
    return ((degree - 32) / 1.8).toFixed(2);
}

function CelsiusToFahrenheit(degree)
{
    return (degree * 1.8 + 32).toFixed(2);
}

document.getElementById('cdeg').onchange = function() {

    let cDeg = document.getElementById('cdeg').value;
    document.getElementById('fdeg').value = CelsiusToFahrenheit(cDeg);

}

document.getElementById('fdeg').onchange = function() {

    let fDeg = document.getElementById('fdeg').value;
    document.getElementById('cdeg').value = FahrenheitToCelsius(fDeg);

}