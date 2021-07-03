import React from 'react'

const data=[
    {
        "id":1,
        "name":"John"
    },{
        "id":2,
        "name":"Peter"
    },{
        "id":3,
        "name":"Richard"
    }
]

function ReactLists(){

    return(
        <div>
            <MyList list={data}/>
        </div>
    )
}

function MyList({list}){
    return(
        <ul>
            {list.map((item)=>(
                <li key={item.id}>{item.name}</li>
            ))}
        </ul>
    )
}

export default ReactLists