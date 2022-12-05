import React from "react";

const ImageBox = (props) => {
  return <img src={props.img} className="imgOfWeather" alt='weather icon' />;
};

export default ImageBox;
