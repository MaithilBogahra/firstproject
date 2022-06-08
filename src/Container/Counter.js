import React, { useEffect, useState } from 'react';

function Counter(props) {
    const [counter, setCounter] = useState(0);

    // const incrementCounter = () => {
    //     setCounter(() => counter + 1)
    // }

    // const decrementCounter = () => {
    //     if (counter === 0) {
    //         counter = 0;
    //     } else {
    //         setCounter(() => counter - 1)
    //     }
    // }
    // useEffect(() => {
    //     if (counter > 0 && counter <= 10) {
    //         setCounter(${ counter })
    //     } else {
    //         setCounter(() => ${ counter })
    //     }
    // });
    return (
        <div>
            <h1>
                <button onClick={() => setCounter(counter + 1)}>+</button>
                Counter :- {counter}
                <button onClick={() => setCounter(counter - 1)}>-</button>
            </h1>
        </div>
    );
}

export default Counter;