import React from 'react'
function CallbackEvent(){

    const[message,setMessage]=React.useState('')

    const handleChange=(event)=>{
        setMessage(event.target.value)
    }

    return(
        <div>
           <MyInput inputValue={message} onInputChange={handleChange} />
            <p>Message : {message}</p>
        </div>
    )
}

function MyInput({inputValue,onInputChange}){
    return(
        <div>
          <input type="text" value={inputValue} onChange={onInputChange}/>
        </div>
    )
}

export default CallbackEvent 