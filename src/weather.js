async function _getWeatherDataFromAPI(location) {
    const WEATHER_API_KEY = '91689c84e8c6409687505241231304'
    let requestURL = `https://api.weatherapi.com/v1/current.json?key=${WEATHER_API_KEY}&q=${location}&aqi=no`;
    let response = await fetch(requestURL, {
        mode: 'cors'
    });
    let weatherData = await response.json();
    console.log(weatherData);
    return weatherData;
}

async function generateWeatherObject(location) {
    let weatherData = await _getWeatherDataFromAPI(location);
    return {
        location: weatherData.location.name,
        condition: weatherData.current.condition,
        temp_c: weatherData.current.temp_c,
        temp_f: weatherData.current.temp_f,
        precip_in: weatherData.current.precip_in,
        precip_mm: weatherData.current.precip_mm
    };
}

export {
    generateWeatherObject
};