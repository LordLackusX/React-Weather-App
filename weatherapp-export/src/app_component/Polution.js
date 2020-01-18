import React from 'react'
import "./weather.style.css";
import Navigation from './Navigation';




/* getQuality = async () => {
  const AQ_url=await fetch(
    `https://api.openaq.org/v1/latest?parameter=co`
  
    );

    const AQ_Response = await AQ_url.json();

    this.setState({
     


    });

  }

this.getQuality(); */







class Polution extends React.Component {
  render() {
    return (
      <div className="container text-light">
        <h3> Polution is 69.12 µg/m³</h3>
      </div>
    )
  }
}
 


export default Polution