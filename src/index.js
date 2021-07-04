import React from 'react';
import ReactDOM from 'react-dom';
import MyApp from './MyApp'
import MyApp1 from './MyApp1'
import MyApp2 from './MyApp2'
import ParentComponent from './ParentComponent'
import FunctionStatePrg from './FunctionStatePrg';
import ReactLifeCycle from './ReactLifeCycle'
import ReactEvents from './ReactEvents';
import ReactClassEvents from './ReactClassEvents';
import CallbackEvent from './CallbackEvent';
import ReactLists from './ReactLists';
import App from './App'

ReactDOM.render(
    <div>
      <App/>
    </div>
  ,
  document.getElementById('root')
);

// 1st parameter: What has to be rendered?
// 2nd Parameter: Where to render?