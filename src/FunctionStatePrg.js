import React,{useState} from 'react'

function FunctionStatePrg(){

    const[value,setValue]=useState(0)

    const incrementValue=()=>{
       // this.setState({value:this.state.value+1})
       setValue(value+1)
    }
        return(
            <div>
                <h1>State Demo</h1>
                <p>Value is: {value}</p>
                <button type="button" onClick={incrementValue}>Change</button>
            </div>
        )
}

export default FunctionStatePrg