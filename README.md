End Project
Annica Gunnrin

Jag har skapat en väldigt enkel väder-sida som kollar hur vädret är i en viss stad. Det finns ju massa såna
men den här har jag ju skapat själv med hjälp av Open API, genom OpenWeatherMap:
https://home.openweathermap.org/api_keys
https://api.openweathermap.org/data/2.5/weather?q=

Såg att det stod att man inte skulle committa real keys, men det såg jag först EFTER att jag skapat
en. Om det nu är en real key, dvs.

Jag skapade ett nytt repository, använde mig av en html5Boilerplate (MIT) och skapade:
-index.html
-style.css
-app.js

Det finns en bild på sidan som ligger i img.

När man öppnar sidan får man möjligheten att skriva i en stad (en container) för att se hur vädret är i just den staden.
Då consolas svaret:

# Simple Weather App
The small web app fetches the current weather data from the OpenWeather API.
The user can search for any city and see the temperature and weather description.

# Features
- Uses **fetch()** to call OpenWeather’s API (GET)
- Displays results in a styled (oh, well) box
- Handles API errors
- I have tried to use a responsive layout using Flex/Flexbox – but didn't put that much time into it.
La till en media query i slutet av CSS:n. Jag hade redan <meta name="viewport" content="width=device-width, initial-scale=1">
Men så lag jag till media query. Sidan är nu responsiv mha Flexbox och media query och anpassar
text, avstånd och bilder för mindre skärmar. Valde att inte ha footern (sticky footer) med då jag tycker bilden är coolare än footern ;).
- Simple, clean UI

# Tech
HTML5 using Boilerplate5, CSS, JavaScript

# JS
De olika elementen är uppdelade i olika containers. Jag satte upp Open API genom den
const API key som jag sen förstod att jag inte skulle göra…
Jag använde mig av const city = document.getElementById för att få hitta staden och

if (!city) {
container.innerHTML = "<p>Please enter a city.</p>";
return; till att skriva staden i en ruta.

const response = await fetch(url); den här const responsen/awaitar fetch från API:n
const data = await response.json(); och hämtar svaret/responsen/data här.

const temp = Math.round(data.main.temp); här hämtas data i form av temperaturen från Math.round
const desc = data.weather[0].description; och beskrivningen
const country = data.sys.country; och landet (domänförkortning)

container.innerHTML = `
  <div class="weather-box"> och här kommer resten av informationen i rutan =
    <h3>${data.name}, ${country}</h3> stad, och namn (som visas som domänförkortning, exempelvis JP eller SE.
    <p>${temp}°C — ${desc}</p> och så kommer temperaturen och en beskrivning av vädret, t.ex. Clear sky eller Broken clouds.
  </div>

catch (err) {
console.error(err);
container.innerHTML = "<p>Could not load weather data. Please check spelling.</p>";
}
Här har jag skapat utrymme att få svar om något går fel.
Stavas staden fel eller staden inte finns får man ett felmeddelande att inte data kunde laddas in
och att man ska kontrollera stavning. T.ex. så får man det om man skriver Toky och inte Tokyo.

# Other
Jag använde mig av border-radius till rundade hörn på knapp/frågebox.


# Learnings

CSS:
Hade lite problem med footern som låg gömd. Det var något som stökade men fick till det till slut.
Kanske var det z-index: 10; /* säkerställ att den ligger ovanpå */ eller så fixade det sig när jag rensade upp lite i koden.
Eftersom vi inte bedöms på css så valde jag att lägga tiden på annat, men det här borde jag egentligen kunna.

