//const API_KEY = "YOUR_REAL_API_KEY_HERE"; // lägg in din riktiga nyckel

async function getWeather(city, country) {
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&appid=${API_KEY}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("City not found or API error");
    }

    const data = await response.json();

    // Variabler som används inom funktionen
    const temp = Math.round(data.main.temp);
    const weather = data.weather[0].description;

    console.log(`${data.name}, ${data.sys.country}: ${temp}°C — ${weather}`);
    return { city: data.name, country: data.sys.country, temp, weather };

  } catch (error) {
    console.error("Error fetching weather:", error);
  }
}

getWeather("Stockholm", "SE");
