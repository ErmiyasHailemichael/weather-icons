import React from "react";
import ImageBox from "./ImageBox";
import Time from './Time'
const Conditions = (props) => {
  return (
    <div className="weather">
      <ImageBox img={props.img} />
      <p>
        <span>conditions:</span> 
        {props.conditions}
      </p>
      <p>
        <span>time:</span><Time time={props.time} />
      </p>
    </div>
  );
};

export default Conditions;
