import React, { useEffect, useState } from 'react';

function Counter(props) {
    const [counter, setCounter] = useState(0);

    const incrementCounter = () => {
        if(counter <= 10){
            setCounter(counter + 1);
        }
    }

    const decrementCounter = () => {
        if (counter > 0) {
            setCounter(counter - 1);
        } 
        
    return (
        <div>
            <h1>
                <button onClick={() => incrementCounter()}>+</button>
                Counter :- {counter}
                <button onClick={() => decrementCounter()}>-</button>
            </h1>
        </div>
    );
}
}

export default Counter;