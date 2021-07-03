import React from 'react'
class MyComp1 extends React.Component{

    componentWillUnmount(){
        console.log("Component1 Unmounted : ");       
    }

    render(){
        return(
            <div>
                <h1>MyComp1</h1>
                <p>This is MyComp1 Component</p>
            </div>
        )
    }
}

export default MyComp1