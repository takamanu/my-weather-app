import axios from 'axios';
// const API_KEY = process.env.API_KEY;
const API_KEY = '68ef061978e3bc02c128b5bd7686e980';

// API FETCH DATA

// Format to Day, Date
function formatToDate(dateTimeRaw) {
  const inputDate = new Date(dateTimeRaw);

  const options = {timeZone: 'Asia/Kuala_Lumpur', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = inputDate.toLocaleDateString('en-US', options);

// console.log(formattedDate);
  return formattedDate
}

export const getWeatherData = async (city) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`
    );

    // Extract relevant weather information
    const data = response.data;
    // console.log(data.list[0].dt)
    const timestampNow = Date.now();
    var options = { timeZone: 'Asia/Kuala_Lumpur' };

    const dateNow = new Date(timestampNow).toLocaleString('en-US', options);
    const dateDay1 = formatToDate(data.list[9].dt_txt)
    const dateDay2 = formatToDate(data.list[17].dt_txt)
    const dateDay3 = formatToDate(data.list[25].dt_txt)

    // console.log(dateNow)
    // console.log(data.list[0].dt)

    
    // console.log(formattedDateNow);

    // Display the result
    const weatherData = {
      datetime: `${dateNow}`, // Current time
      temperature: `${data.list[0].main.temp}°C`, // Current temperature
      location: `${data.city.name}, ${data.city.country}`, // City and country
      condition: data.list[0].weather[0].main, // Current weather condition

      forecastDay: [
        `${dateDay1}`,
        `${dateDay2}`,
        `${dateDay3}`,
      ],

      forecastWeather: [
        `${data.list[9].weather[0].description}`,
        `${data.list[17].weather[0].description}`,
        `${data.list[25].weather[0].description}`,
      ],

      forecastTemp: [
        `${data.list[9].main.temp}°C`,
        `${data.list[17].main.temp}°C`,
        `${data.list[25].main.temp}°C`,
      ],
    };

    console.log(weatherData)

    return weatherData;
  } catch (error) {

    const weatherData = {
      location: `Location not found.`,
    };
    return weatherData;
  }
};
