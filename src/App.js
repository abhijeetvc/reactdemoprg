import Home from './component/Home'
import About from './component/About'
import Services from './component/Services'
import {BrowserRouter,Switch,Route,Link} from 'react-router-dom'

function App() {
  return (
      <div>
      <BrowserRouter>
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
      </ul>
       
        <Switch>
         <Route exact path="/home">
            <Home/>
         </Route>
         <Route path="/about">
            <About/>
         </Route>
         <Route path="/services">
            <Services/>
         </Route>   
        </Switch>  
       </BrowserRouter>  
      </div>
  );
}

export default App;
