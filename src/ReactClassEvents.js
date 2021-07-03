import React from 'react'

class ReactClassEvents extends React.Component{

    constructor(){
        super()
        this.state={
            firstName:'',
            fName:''
        }
    }

    onChange=e=>{
        //setFirstName(e.target.value)
        this.setState({firstName:e.target.value})
    }

    checkEvent=()=>{
    //    setFName(firstName)
      this.setState({fName:this.state.firstName})
    }

    render(){
        return(
            <div>
                <h1>React Events</h1>
                <input type="text" 
                       name="firstName" 
                       value={this.state.firstName}
                       onChange={this.onChange} />
                <button type="button" onClick={this.checkEvent}>Check Event</button>
                <p>FirstName : {this.state.fName} </p>       
            </div>
        )
    }    
}

export default ReactClassEvents