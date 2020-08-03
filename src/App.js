import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Hello from './Hello';


function App({name}) {
  return <div>
          Hello from App.js updated by <strong>{name}</strong>
          <br/>
          <br/>
          Expressions:
          <br/>
          2+2 = {2+2}
          <br/>
          2*9 = {2*9}
          <br/>
          <br/>
          CSS applied to text in Hello.js:
          <Hello firstname= {name}></Hello>
          <br/>
          Unordered List:
          <ul>
            <li>First Item</li>
            <li>Second Item</li>
            <li>Third Item</li>
          </ul>
          <br/>
          Ordered List:
          <ol>
            <li>First Item</li>
            <li>Second Item</li>
            <li>Third Item</li>
          </ol>
          
        </div>
}

export default App;
