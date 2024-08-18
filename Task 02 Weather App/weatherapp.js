var inputvalue = document.querySelector('#cityinput')
var btn = document.querySelector('#add')
var city = document.querySelector('#cityoutput')
var describe = document.querySelector('#description')
var temp = document.querySelector('#temp')
var wind = document.querySelector('#wind')
apik ='32b3253d7cc682280fc168c6e2054a3f'
function convertion(val){
    return (val - 273).toFixed(3)
}

btn.addEventListener('click', function()
{ 
    fetch('https://api.openweathermap.org/data/3.0/onecall?q='+inputvalue.value+ '&appid='+apik)
    .then( res => res.json())

    .then(data =>
    {
        var nameval = data['name']
        var descrip =data['weather']['0']['description']
        var temperature = data['main']['temp']
        var wndspeed = data['wind']['speed']


        city.innerHTML='Weather of <span>${nameval}<span>'
        temp.innerHTML='Temperature : <span>${convertion(temperature)} C<span>'
        description.innerHTML = 'Sky Conditions :<span>${describe}<span>'
        wind.innerHTML = 'Wind Speed : <span>${wndspeed} km/h<span>'
   })
   .catch(err =>alert('You entered wrong city name'))
})