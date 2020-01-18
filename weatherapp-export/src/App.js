import React from "react";
import "./App.css";
import Form from "./app_component/form.component";
import Weather from "./app_component/weather.component";
import Display from "./app_component/currentWeather.component";
import Polution from './app_component/Polution';
import Navigation from './app_component/Navigation';

import "bootstrap/dist/css/bootstrap.min.css";
// git project Icons https://github.com/erikflowers/weather-icons
import "weather-icons/css/weather-icons.css";
//import  {BrowserRouter as Router, Route} from 'react-dom';
const Api_Key = "429736441cf3572838aa10530929f7cd";
const notificationElement = document.querySelector(".notification");








// CHECK IF BROWSER SUPPORTS GEOLOCATION
if('geolocation' in navigator){
  navigator.geolocation.getCurrentPosition(setPosition, showError);
}else{
  notificationElement.style.display = "block";
  notificationElement.innerHTML = "<p>Browser doesn't Support Geolocation</p>";
}

// SHOW ERROR WHEN THERE IS AN ISSUE WITH GEOLOCATION SERVICE
function showError(error){
  notificationElement.style.display = "block";
  notificationElement.innerHTML = `<p> ${error.message} </p>`;
}
 
// SET USER'S POSITION
function setPosition(position){
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  
  getWeather2(latitude, longitude);
}
// GET WEATHER FROM API PROVIDER
function getWeather2(latitude, longitude){
  let api = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${Api_Key}`;
  
  fetch(api)
      .then(function(response){
          let data = response.json();
          return data;
      })
      .then(function(data){
          
          
          Weather.city = data.name;
          Weather.country = data.sys.country;
      })
      .then(function(){
          displayWeather(Display);
      });
}


/* function App2() {
  return(
<Router>
<div className="APP">

<Route path="/Weather" component = {Weather}> </Route>





</div>
</Router>
  );


} */











class App extends React.Component {
  constructor() {
    super();
    this.state = {
      city: undefined,
      country: undefined,
      icon: undefined,
      main: undefined,
      celsius: undefined,
      temp_max: null,
      temp_min: null,
      description: "",
      error: false,
      coordinates: undefined,
      pressure: undefined,
      humidity: undefined,
      visibility:undefined,
      wind: undefined,
      
    };

 this.state = {

  city2: "Roskilde",
  country2: undefined,
  icon2: undefined,
  main2: undefined,
  celsius2: undefined,
  temp_max2: null,
  temp_min2: null,
  description: "",
  error: false,
  coordinates: undefined,
  pressure: undefined,
  humidity: undefined,
  visibility:undefined,
  wind: undefined,
 







 }


 this.getWeather();

    this.weatherIcon = {
      Thunderstorm: "wi-thunderstorm",
      Drizzle: "wi-sleet",
      Rain: "wi-storm-showers",
      Snow: "wi-snow",
      Atmosphere: "wi-fog",
      Clear: "wi-day-sunny",
      Clouds: "wi-day-fog"
    };
  }

  get_WeatherIcon(icons, rangeId) {
    switch (true) {
      case rangeId >= 200 && rangeId < 232:
        this.setState({ icon: icons.Thunderstorm });
        break;
      case rangeId >= 300 && rangeId <= 321:
        this.setState({ icon: icons.Drizzle });
        break;
      case rangeId >= 500 && rangeId <= 521:
        this.setState({ icon: icons.Rain });
        break;
      case rangeId >= 600 && rangeId <= 622:
        this.setState({ icon: icons.Snow });
        break;
      case rangeId >= 701 && rangeId <= 781:
        this.setState({ icon: icons.Atmosphere });
        break;
      case rangeId === 800:
        this.setState({ icon: icons.Clear });
        break;
      case rangeId >= 801 && rangeId <= 804:
        this.setState({ icon: icons.Clouds });
        break;
      default:
        this.setState({ icon: icons.Clouds });
    }
  }

  calCelsius(temp) {
    let cell = Math.floor(temp - 273.15);
    return cell;
  }

  getWeather = async () => {
    const api_call=await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=Roskilde,dk&appid=${Api_Key}`
    
      );

      const response = await api_call.json();

      this.setState({
        city: `${response.name}, ${response.sys.country}`,
        main: response.weather[0].main,
        celsius: this.calCelsius(response.main.temp),
        temp_max: this.calCelsius(response.main.temp_max),
        temp_min: this.calCelsius(response.main.temp_min),
        description: response.weather[0].description,
        error: false,
        humidity: response.main.humidity
      });

      // seting icons
      this.get_WeatherIcon(this.weatherIcon, response.weather[0].id);

      console.log(response);
    } ;


    getnewWeather = async e => {
      e.preventDefault();
  
      const country = e.target.elements.country.value;
      const city = e.target.elements.city.value;
  
      if (country && city) {
        const api_call = await fetch(
          `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${Api_Key}`
        );
  
        const response = await api_call.json();
  
        this.setState({
          city: `${response.name}, ${response.sys.country}`,
          country: response.sys.country,
          main: response.weather[0].main,
          celsius: this.calCelsius(response.main.temp),
          temp_max: this.calCelsius(response.main.temp_max),
          temp_min: this.calCelsius(response.main.temp_min),
          description: response.weather[0].description,
          error: false,
          humidity:response.main.humidity,


        });
  
        // setting icons
        this.get_WeatherIcon(this.weatherIcon, response.weather[0].id);
  
        console.log(response);
      } else {
        this.setState({
          error: true
        });
      }
    }; 


  

  


  render() {
    return (
      <div className="App">
        <Form loadweather={this.getnewWeather} error={this.state.error} />
        <Weather
          cityname={this.state.city}
          weatherIcon={this.state.icon}
          temp_celsius={this.state.celsius}
          temp_max={this.state.temp_max}
          temp_min={this.state.temp_min}
          description={this.state.description}
          humidity={this.state.humidity}
          visibility={this.state.visibility}
          wind={this.state.wind}      
        />

{/* { <Display
          cityname={this.state.city}
          weatherIcon={this.state.icon}
          temp_celsius={this.state.celsius}
          temp_max={this.state.temp_max}
          temp_min={this.state.temp_min}
          description={this.state.description}
          humidity={this.state.humidity}
          visibility={this.state.visibility}
          wind={this.state.wind}
          
        /> } */}


<Navigation>









</Navigation>









/>




      </div>


      
    );
  }









  


}

export default App;


function displayWeather(Display){
  

};

// DISPLAY WEATHER TO UI

/* function displayWeather(){
  
 render(){
 <div className="App"> 
 <Display
          cityname={this.state.city}
          weatherIcon={this.state.icon}
          temp_celsius={this.state.celsius}
          temp_max={this.state.temp_max}
          temp_min={this.state.temp_min}
          description={this.state.description}
          humidity={this.state.humidity}
          visibility={this.state.visibility}
          wind={this.state.wind}
          
        />
 



 
 </div>




 };


  
 } */
 