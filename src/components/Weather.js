import React from 'react';

class Weather extends React.Component {
  state = {
    weather: [],
    main: [],
    countyName: [],
    date: []
  };
  /*
    1. Add the method componentDidMount()
    2. Call fetch("https://dev-react-explained-api.pantheonsite.io/wp-json/wp/v2/posts")
    3. Then call .json() on the response
    4. Take that and set it as the value of posts in state
    5  Add a catch to log out any errors
  */
  componentDidMount() {
    fetch("https://mm214.com/demo.php")
      .then(response => response.json())
      .then(result => {
            {console.log("result:", result);}
          this.setState({
            weather: result.weather,
            main: result.main,
            countyName: result.name,
            date: result.dt

          })
       })
      .catch(error => console.error(error));
   }
  render() {
    return (
      <header>
       <article className="weather">
        <h2>Weather in {this.state.countyName}</h2>
        <p>{Date(this.state.date)}</p>
          {this.state.weather.map(i => (
            <div>
            <h2>Description</h2>
            <p>{i.description}</p>
            </div>
          ))}

          <div>
            <h2>Temperature</h2>
            <p>{(this.state.main.temp-273.15).toFixed(2)}&deg;C&nbsp;&nbsp;

            {(this.state.main.temp*9/5-459.67).toFixed(2)}&deg;F</p>

            <h2>Humidity</h2>
            <p>{this.state.main.humidity}%</p>
          </div>
        </article>

      </header>
    );
  }
}

export default Weather;
