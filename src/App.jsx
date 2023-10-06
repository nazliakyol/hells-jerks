import React, { useState } from "react";
import Score from "./Score";
import Punishment from "./components/Punishment";
import Lava from "./Lava";
import Demon from "./Demon";
import Control from "./Control";

function App(){

    const [score, setScore] = useState(0);

    function upgradeScore(score){
        setScore(score => {
            score += 1;
            return score;
            });
        };


    return <div>
         <Score name={Score.name} amount={Score.amount} update={upgradeScore}/>
         <Punishment />
         <Lava />
         <Demon />
         <Control />
         
    </div>
}

export default App;