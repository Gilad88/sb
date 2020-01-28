import React from 'react';

class OutpuText extends React.Component{
    
    outPut = event => {
        var x = document.getElementById("myInput").value;
        document.getElementById("tex").innerHTML =  x;
      }    
    
    render(){
    return <div>

    <input type="text" id="myInput" onInput={this.outPut}></input>
    <p id="tex"></p>
    </div>
}
        
}

export default OutpuText
