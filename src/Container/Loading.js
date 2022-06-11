import React, { Component } from 'react';

function Loading(Component) {
    return function LoadingHome({isLoading,data}){
        if(isLoading){
            return(
            <h1>Loading....</h1>
            )
        }else{
            return(
            <Component data={data} />
            )
        }
    }
    
}

export default Loading;