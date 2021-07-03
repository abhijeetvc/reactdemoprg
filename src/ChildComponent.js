function ChildComponent(props){
    return(
      <div>
          <h1>Child component!!!</h1>
          <p>This is child component.</p>
          <p>{props.message}</p>
      </div>
    )
  }

  export default ChildComponent