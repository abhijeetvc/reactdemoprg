import React from 'react'

class ClassStatePrg extends React.Component{

    constructor(){
        super()
        this.state={
            value:0
        }
    }

    incrementValue=()=>{
        this.setState({value:this.state.value+1})
    }

    render(){
        return(
            <div>
                <h1>State Demo</h1>
                <p>Value is: {this.state.value}</p>
                <button type="button" onClick={this.incrementValue}>Change</button>
            </div>
        )
    }
}

export default ClassStatePrg