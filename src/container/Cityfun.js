import React, { useState } from 'react';

function Cityfun(props) {
    const [City,setCityfun] = useState('Surat')

    const changeCity = () =>{
        setCityfun('US')
    }

    return (
        <div>
        <h1>City function based components</h1>
        <p>{City}</p>
        <button onClick={() =>changeCity()}>Change City</button>
        </div>
    );
}

export default Cityfun;