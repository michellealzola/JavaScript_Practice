let homeStreet = '1 Main St.';
let homeCity = 'Sicilia';
let homeState = 'MA';
let homeCode = '02103';
let workStreet = '15 Oak Ln.';
let workCity = 'Central City';
let workState = 'MA';
let workCode = '02104';

function getHome()
{
    document.getElementById('street-address').value = homeStreet;
    document.getElementById('city').value = homeCity;
    document.getElementById('state').value = homeState;
    document.getElementById('zip').value = homeCode;
}

function getWork()
{
    document.getElementById('street-address').value = workStreet;
    document.getElementById('city').value = workCity;
    document.getElementById('state').value = workState;
    document.getElementById('zip').value = workCode;
}