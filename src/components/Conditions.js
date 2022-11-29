import React from "react";

const Conditions = (props) => {
  return (
    <div className="Weather">
      <img src={props.img} alt="..." />
      <p>
        <span>Conditions: </span> {props.conditions }
      </p>
      <p>
        <span>time: </span> {props.time}
      </p>
    </div>
  );
};

export default Conditions;
