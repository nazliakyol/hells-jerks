import React from "react";
import Score from "./Punishment";



function Punishment(props) {

    return (
      <div className="score">
        <h1>{props.type}</h1>
        <Score name={Score.name} amount={Score.amount}/>
      </div>
    );
    }

export default Punishment;

