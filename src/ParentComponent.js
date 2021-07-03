import ChildComponent from './ChildComponent'

function ParentComponent(){
    const message="This is props demo!!!"
    const person={
      name:"P1",
      city:"Pune",
      email:"a@gmail.com"
    }
      return(
        <div>
          <h1>Parent Component</h1>
          <p>This is parent component</p>
          <ChildComponent message={message}/>
        </div>
      )
  }

  export default ParentComponent