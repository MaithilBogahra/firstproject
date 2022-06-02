import React, { Component } from 'react'

export default class Cityclass extends Component {
    constructor (props){
        super(props);

        this.state ={
            countryName :'Surat'
        }
    }

    changeCity = () => {
       this.setState ({
           countryName:'Ahemdabad'
       })
    }
  render() {
    return (
      <div>
        <h1>City Class base components </h1>
        <p>{this.state.countryName}</p>
        <button onClick={() =>this.changeCity()}>Change City</button>
      </div>
    )
  }
}
