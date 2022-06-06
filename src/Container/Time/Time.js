import React, { Component } from 'react';

class Time extends Component {
    constructor(props) {
        super(props);
        
        this.state ={
            Time : new Date()
        }
    }

tick =() =>{
this.setState({
    Time:new Date()
})
}

    componentDidMount = () => {
        this.TimeI = setInterval(() => this.tick(),1000)
    }
    
    componentDidUpdate = (prevProps , prevState) =>{
    if(this.state.Time !== prevState.Time){
    console.log("ComponentDidUpdate");
}
    }

    componentWillUnmount = () => {
        clearInterval(this.TimeI)
    }
    render() {
        return (
            <div>
                <p>{this.state.Time.toLocaleTimeString()}</p>
            </div>
        );
    }
}

export default Time;