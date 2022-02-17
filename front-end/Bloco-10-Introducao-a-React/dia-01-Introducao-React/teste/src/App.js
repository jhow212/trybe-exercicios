import logo from './logo.svg';
import './App.css';
import React from 'react';
import Img from './img.jsx'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={Img} className="App-logo" alt="logo" />
        <img src={Img} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

// App.js

// function App() {
//   return (
//     <div className='App'>
//       <h1>APP</h1>
//     </div>
//   );
// }

export default App;
