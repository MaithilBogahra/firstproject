import React, { useEffect, useState } from 'react';

function Timefun(props) {
    const[time,setTime]=useState(new Date());

    const tick =() =>{
        setTime(new Date());
    }

useEffect (() => {
    // componentDidmount , componentDidUpadte
    const time= setInterval(() =>tick() ,1000);

    // componentWillunmount
    return () =>{
        clearInterval(time)
    }
},[time]);

    return (
        <div>
            <p>{time.toLocaleTimeString()}</p>
        </div>
    );
}

export default Timefun;