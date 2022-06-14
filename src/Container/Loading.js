import React, { Component } from 'react';

function Loading(Component) {
    return function EmployeeHome({ourLoading,data}){
        if(ourLoading){
            return(
            <h1>Employee Data Loading....</h1>
            )
        }else{
            return(
            <Component data={data} />
            )
        }
    }
    
}

export default Loading;