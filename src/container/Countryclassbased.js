import React, { Component } from 'react'

export default class Countryclassbased extends Component {

    constructor (props){
        super(props);

        this.state = {
            countryName : 'India'
        }
    }
    changeCountry =() => {
        this.setstate ({
            countryName :'US'
        })
    }
  render() {
    return (
      <div>
        <h1>Country class based components</h1>
        <p>{this.state.countryName}</p>
        <button onClick={() => this.changeCountry()}>ChangeCountry</button>
      </div>
    )
  }
}
