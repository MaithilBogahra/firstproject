import React, { useState } from 'react';

function Cityfun(props) {
    const [City,setCityfun] = useState('Surat')

    const changeCity = () =>{
        setCityfun('US');
    }

    return (
        <div>
        <h1>City function based components</h1>
        <p>{City}</p>
        <button onClick={() =>changeCity()}>Change City</button>
            <p>{props.id} {props.Country_name}</p>
        </div>
    );
}

export default Cityfun;