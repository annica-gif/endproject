const API_KEY = "bf911426b3cfa77b46355221ff33da01"; // 🔑 Replace with your OpenWeather API key

document.getElementById("checkWeather").addEventListener("click", async () => {
  const city = document.getElementById("cityInput").value.trim();
  const container = document.getElementById("weatherContainer");

  if (!city) {
    container.innerHTML = "<p>Please enter a city.</p>";
    return;
  }

  container.innerHTML = "<p>Loading...</p>";

  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
    const response = await fetch(url);

    if (!response.ok) throw new Error("City not found");

    const data = await response.json();

    const temp = Math.round(data.main.temp);
    const desc = data.weather[0].description;
    const country = data.sys.country;

    container.innerHTML = `
      <div class="weather-box">
        <h3>${data.name}, ${country}</h3>
        <p>${temp}°C — ${desc}</p>
      </div>
    `;
  } catch (err) {
    console.error(err);
    container.innerHTML = "<p>Could not load weather data. Please check spelling.</p>";
  }
});


//const API_KEY = "YOUR_REAL_API_KEY_HERE"; // lägg in din riktiga nyckel

/*async function getWeather(city, country) {
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
 */
