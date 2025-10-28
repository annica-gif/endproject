let result;
//await fetch("https://openweathermap.org/api")
//await fetch("https://openweathermap.org/weather-assistant?apikey") //={API key}
await fetch("https://api.openweathermap.org/data/2.5/weather?q=")
{city name},{country code}&appid={API key}
  .then(res => res.json())
  .then(data => result = city weather)
for(let i = 0; i < result.name; i++){
  console.log(result[i]);
}



/*
<current>
  <city id="3163858" name="Zocca">
    <coord lon="10.99" lat="44.34"/>
    <country>IT</country>
    <timezone>7200</timezone>
    <sun rise="2022-08-30T04:36:27" set="2022-08-30T17:57:28"/>
  </city>
  <temperature value="298.48" min="297.56" max="300.05" unit="kelvin"/>
  <feels_like value="298.74" unit="kelvin"/>
  <humidity value="64" unit="%"/>
  <pressure value="1015" unit="hPa"/>
  <wind>
    <speed value="0.62" unit="m/s" name="Calm"/>
    <gusts value="1.18"/>
    <direction value="349" code="N" name="North"/>
  </wind>
  <clouds value="100" name="overcast clouds"/>
  <visibility value="10000"/>
  <precipitation value="3.37" mode="rain" unit="1h"/>
  <weather number="501" value="moderate rain" icon="10d"/>
  <lastupdate value="2022-08-30T14:45:57"/>
</current>
*/

const API_KEY = "YOUR_REAL_API_KEY_HERE";
