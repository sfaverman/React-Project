import React from 'react';

class Weather extends React.Component {
  state = {
    weather: [],
    main: [],
    countyName: [],
    date: []
  };

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
      <main id="weather">
       <article className="weather">
        <h2>Weather in {this.state.countyName}</h2>
        <p>{Date(this.state.date)}</p>
          {this.state.weather.map(i => (
            <div>
            <h2>Description</h2>
            <p className="desc"><b>{i.description}</b></p>
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

      </main>
    );
  }
}

export default Weather;
