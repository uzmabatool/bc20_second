import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './Hello';


function App({name, age}) {
  return <div>
          Hello from App.js updated by {name} Age= {age-5}
          <br/>
          <Hello firstname= {name}></Hello>
        </div>
}

export default App;
