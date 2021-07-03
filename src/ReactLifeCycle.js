import React from 'react'
import MyComp1 from './MyComp1';
import MyComp2 from './MyComp2';
class ReactLifeCycle extends React.Component{
    constructor(){
        super()
        this.state={
            number:0
        }
    }
    componentDidMount(){
        console.log("Component Did Mount : "+this.state.number);        
    }

    componentDidUpdate(){
        console.log("Component Did Update : "+this.state.number);  
    }
    // useEffect --> Hook
    handleIncrement=()=>{
        this.setState({number:this.state.number+1})
    }

    handleToggle=()=>{
        console.log("Hiiiii");      
        this.setState({number:this.state.number===0 ? 1:0})
    }

    render(){
        const component= this.state.number ? <MyComp1/> : <MyComp2/>
        return(
            <div>
                <h1>React Component Life Cycle Methods</h1>
                <p>Number is: {this.state.number}</p>
                {component}
                <button type="button" onClick={this.handleIncrement}>Increment</button>
                <button type="button" onClick={this.handleToggle}>Toggle</button>
            </div>
        )
    }
}

export default ReactLifeCycle 