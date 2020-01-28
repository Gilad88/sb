import React from 'react';

class CounterBtn extends React.Component{
    onBtnClicked = event => {
        this.props.click()
    }
    render(){
        return <button onClick={this.onBtnClicked}>Click!</button>
    }
        
}

export default CounterBtn