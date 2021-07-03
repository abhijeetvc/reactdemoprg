import React from 'react'

class MyComp2 extends React.Component{

    componentWillUnmount(){
        console.log("Component2 Unmounted : ");       
    }
    render(){
        return(
            <div>
                <h1>MyComp2</h1>
                <p>This is MyComp2 Component</p>
            </div>
        )
    }
}

export default MyComp2