const api_Key = 'f3156e042024b324b323d3ec6356fa12'
const loadTemperature = city => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_Key}&units=metric`
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemperature(data))

}

const displayTemperature = data => {
    // const temperature = document.getElementById('temperature');
    // console.log(data.main.temp)
    // temperature.innerText = data.main.temp
    setInnerText('temperature', data.main.temp)
    setInnerText('condition', data.weather[0].main)
    console.log(data.weather[0].main)
}

const setInnerText = (id, text) => {
    const temperature = document.getElementById(id);
    // console.log(data.main.temp)
    temperature.innerText = text;

}

document.getElementById('btn-search').addEventListener('click', function () {
    const SearchField = document.getElementById('input-fild');
    const city = SearchField.value;
    document.getElementById('city').innerText = city;
    loadTemperature(city)

})

loadTemperature('dhaka');