let result;
await fetch("https://openweathermap.org/api")
  .then(res => res.json())
  .then(data => result = data.meals)
for(let i = 0; i < result.length; i++){
  console.log(result[i]);
}
