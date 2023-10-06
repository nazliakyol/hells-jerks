import React from "react";
import Score from "./Score";
import Punishment from "./Punishment";
// props:
// level
// content

//functions:
// getCurrent()
// getUpgrade() --> onClick()



function Control(props) {

return (
  <div className="control">
    
    <Punishment type={Punishment.type} />
    <img src="dummy"/><p> <Score icon={Score.icon} amount={Score.amount} name={Score.name} /></p>
    <p>{props.content}</p>
   
    <button
      onClick={() => {
        props.getUpgrade(props.score);
      }}
    >
        </button>
  </div>
);
}

export default Control;