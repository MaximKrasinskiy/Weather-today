document.title = "Weather today";

const param = {
    url: 'http://api.openweathermap.org/data/2.5/',
    appid:'d00e8ae29b75e5f0b5270280f2da7357'
}
function getWeather() {
	const cityId = document.querySelector('#city').value;
	fetch(`${param.url}weather?id=${cityId}&units=metric&APPID=${param.appid}`)
	.then(weather => {
			return weather.json();
		}).then(showWeather);
}
function showWeather(data) {
console.log(data)
document.querySelector('.package-name').textContent = `${data.name}`;
    document.querySelector('.temperature').innerHTML = `${Math.floor(data.main.temp)} &deg`;
    document.querySelector('.feel-like').innerHTML = `(ощущается как : ${Math.floor(data.main.feels_like)} &deg)`;
    document.querySelector('.pressure').textContent = `${data.main.pressure} мм рт.ст.`;
    document.querySelector('.humidity').textContent = `влажность ${data.main.humidity}%`;
    document.querySelector('.wind').textContent = `скорость ветра ${data.wind.speed} м/с`;
    document.querySelector('.cloud').innerHTML = `<img src="http://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;

}
getWeather();
document.querySelector('#city').onchange = getWeather;