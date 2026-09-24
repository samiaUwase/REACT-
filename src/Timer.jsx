import { useState } from "react";
function Timer(){
    const[seconds,setSeconds]=useState(0);
    return (
        <div className="timer">
            <h1>TIMER</h1>
            <h1 >{seconds}</h1>
            <button  onClick={()=>setSeconds(seconds+1)}>ADD SECOND</button>
        </div>
    );

}
export default Timer;