import React from 'react'
function ReactEvents(){

    const[firstName,setFirstName]=React.useState('')
    const[fName,setFName]=React.useState('')

    const onChange=e=>{
        setFirstName(e.target.value)
    }

    // const checkEvent=()=>{
    //     setFName(firstName)
    // }
    return(
        <div>
            <h1>React Events</h1>
            <input type="text" 
                   name="firstName" 
                   value={firstName}
                   onChange={onChange} />
            <button type="button" onClick={()=>setFName(firstName)}>Check Event</button>
            <p>FirstName : {fName} </p>       
        </div>
    )
}

export default ReactEvents