import React from 'react';
import {useState} from 'react'

const Counter = () => {

    const [counterValue, setCounterValue] = useState(0)
    const [inputValue, setInputValue] = useState(1)

    const addToCounter = () => {
        setCounterValue(counterValue + inputValue)
    }
    return (
        <div>
            <h3 data-testid='counter-header'>My Counter</h3>
            <h2 data-testid='counter'>0</h2>
            <button data-testid='sub-btn'>-</button>
            <input data-testid='input' value={inputValue} onChange={ (e) => setInputValue(e.target.value)}/>
            <button data-testid='add-btn' onClick={addToCounter}>+</button>
        </div>
    );
}

export default Counter;
