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


// To access an element example
// const temperature = locationsAndWeatherForecast[0].weather[1].temperature;
// console.log(temperature); // Output: 72
/*In this example, the index [0] is used to access the first object in the locationsAndWeatherForecast array, which represents the first location ("New York City"). Then, the dot notation is used to access the weather property of that object, which is an array of 7-day weather forecast. Finally, another dot notation is used to access the second object in the weather array (index [1]), which represents Tuesday's weather forecast, and the temperature property of that object. The value of the temperature property (which is 72) is then logged to the console using console.log().*/