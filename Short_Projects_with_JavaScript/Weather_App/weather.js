let locationsAndWeatherForecast = [
    {
      location: {
        name: "New York City",
        lat: 40.7128,
        lon: -74.0060
      },
      weather: [
        {
          date: "Monday",
          temperature: 68,
          description: "Sunny"
        },
        {
          date: "Tuesday",
          temperature: 72,
          description: "Mostly Sunny"
        },
        {
          date: "Wednesday",
          temperature: 64,
          description: "Partly Cloudy"
        },
        {
          date: "Thursday",
          temperature: 59,
          description: "Rainy"
        },
        {
          date: "Friday",
          temperature: 57,
          description: "Rainy"
        },
        {
          date: "Saturday",
          temperature: 61,
          description: "Cloudy"
        },
        {
          date: "Sunday",
          temperature: 65,
          description: "Partly Sunny"
        }
      ]
    },
    {
      location: {
        name: "Los Angeles",
        lat: 34.0522,
        lon: -118.2437
      },
      weather: [
        {
          date: "Monday",
          temperature: 78,
          description: "Sunny"
        },
        {
          date: "Tuesday",
          temperature: 82,
          description: "Mostly Sunny"
        },
        {
          date: "Wednesday",
          temperature: 76,
          description: "Partly Cloudy"
        },
        {
          date: "Thursday",
          temperature: 71,
          description: "Rainy"
        },
        {
          date: "Friday",
          temperature: 69,
          description: "Rainy"
        },
        {
          date: "Saturday",
          temperature: 72,
          description: "Cloudy"
        },
        {
          date: "Sunday",
          temperature: 76,
          description: "Partly Sunny"
        }
      ]
    },
    {
      location: {
        name: "Chicago",
        lat: 41.8781,
        lon: -87.6298
      },
      weather: [
        {
          date: "Monday",
          temperature: 60,
          description: "Cloudy"
        },
        {
          date: "Tuesday",
          temperature: 63,
          description: "Mostly Cloudy"
        },
        {
          date: "Wednesday",
          temperature: 55,
          description: "Partly Cloudy"
        },
        {
          date: "Thursday",
          temperature: 50,
          description: "Rainy"
        },
        {
          date: "Friday",
          temperature: 48,
          description: "Rainy"
        },
        {
          date: "Saturday",
          temperature: 52,
          description: "Cloudy"
        },
        {
          date: "Sunday",
          temperature: 56,
          description: "Partly Sunny"
        }
      ]
    }
  ];

let days = ["Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"];

window.addEventListener('load', addDays);

function addDays() 
{
    let topCells = document.getElementsByTagName('th');
    for (let i = 0; i < 7; i++) 
    {
        topCells[i].innerHTML = days[i];
    }
}

let buttons = document.getElementsByClassName('btn');

for (let i = 0; i < buttons.length; i++) 
{
    let locationIndex = i;
    buttons[i].addEventListener('click', function() {
        getData(locationIndex);
    });    
}

function getData(locationIndex) 
{
    console.log(locationIndex);
    for (let i = 0; i < days.length; i++) 
    {
        let htmlCode = '';
        let tableCell = document.getElementById(days[i]);
        htmlCode += '<p>'
        htmlCode += locationsAndWeatherForecast[locationIndex].weather[i].temperature
        htmlCode += '</p>'
        htmlCode += '<p>'
        htmlCode += locationsAndWeatherForecast[locationIndex].weather[i].description
        htmlCode += '</p>'
        tableCell.innerHTML = htmlCode;        
    }

}


