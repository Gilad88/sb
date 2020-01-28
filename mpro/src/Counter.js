import React from 'react';
import CounterNum from './counterNum';
import CounterBtn from './CounterBtn';

class Counter extends React.Component{
    constructor() {
        super()
        this.state = {
            num: 0
        }
    }
    changeNum =()=>{
        this.setState({ num: this.state.num+1})
    }
    render(){
        return <div>
            <CounterNum num={this.state.num} />
            <CounterBtn click={this.changeNum} />

        </div>
    }
        
}

export default Counter