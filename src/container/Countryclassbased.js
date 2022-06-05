import React, { Component } from 'react'
import Cityclass from './Cityclass';

export default class Countryclassbased extends Component {

    constructor (props){
        super(props);

        this.state = {
            countryName : 'India',
           
        }
    }
    changeCountry =() => {
        this.setState ({
            countryName :'US',
           
        })
    }
  render() {
    return (
      <div>
        <h1>Country class based components</h1>
        <p>{this.state.countryName}</p>
        <p>{this.state.place}</p>
        <button onClick={() => this.changeCountry()}>ChangeCountry</button>
        <Cityclass id="7290" Country_Name={this.state.countryName} />
      </div>
    )
  }
}
