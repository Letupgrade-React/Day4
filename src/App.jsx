import React, { useState } from 'react';
import './style.css';
import Button  from "./Button"
import Game from "./Tic"
const App =()=>{
    const [currentState, setCurrentState]=useState(true)
    const [start, setStart]=useState(false)
    return (
        <div>
            <h2 style={{marginTop:50}}>Tik Tac Toe Application Assignment</h2>
            <p className="text-dark">Welcome to React Js Program!.</p>
            <h5 className="text-dark">Day 4 Assignment</h5> 
            {
                start?
                <Game currentState={currentState} setCurrentState={setCurrentState}/>
                :
                <div className="mt-5 pt-5" style={{display: "flex",justifyContent: "center",alignItems: "center"}}>
                    <Button onClick={()=>{setStart(true)}} text={"Start With X"} />
                    <Button onClick={()=>{setStart(true); setCurrentState(false)}} text={"Start With O"} />
                </div>
            }
            
        </div>
    )
}
export default App