import "./Counter.css";
import { useState } from "react";

export function Counter (props) {
    const counterState = useState(props.startingState);
    const counter = counterState[0];
    const setCounter = counterState[1];

    //const [counter, setCounter] = useState(props.startingState);

    const handleClickPlus = () => {
        setCounter((state) => ++state);
    }
    const handleClickMinus = () => {
        setCounter((state) => --state);
    }


    return (
    <div>
        <button className="counter" onClick={handleClickMinus}>-</button>
        <button className="counter" >{counter}</button>
        <button className="counter" onClick={handleClickPlus}>+</button>
    </div>
    );
}