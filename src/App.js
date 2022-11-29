import React from "react";
import "./styles.css";
import weatherArray from "./weatherData";

import Conditions from "./components/Conditions";

const displays = weatherArray.map((ele, index) => {
  return <Conditions {...ele} key={index} />;
});
console.log(Conditions);

export default function App() {
  return (
    <div className="App">
      <h1>My WeatherIcons App</h1>
      <section className="imagecard">{displays}</section>
    </div>
  );
}
