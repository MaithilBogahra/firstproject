import React, { useState } from 'react';

function Funbase(props) {
    const [countryName,setcountryName] =useState('India')

    const changeCountry = () => {
        setcountryName('US');
    }
    return (
        <div>
            <h1>country function based components</h1>
            <h4>{countryName}</h4>
            <button onClick={() => changeCountry()}>ChangeCountry</button>
        </div>
    );
}

export default Funbase;