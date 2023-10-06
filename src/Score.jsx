import React from "react";
// props: 
// icon
// name
// amount

// create a button 
// use useState --> reduce the amount : amount setAmount
// create a function --> upgrade(amount)



function Score(props) {

    return (
      <div className="score">
        <p>{props.icon}</p>
        <p>{props.name}</p>
        <p>{props.amount}</p>
        <button
          onClick={() => {
            props.update(props.amount);
        }}
      > click me</button>
      </div>

    );
    }

export default Score;




 