import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const[Item,setItem]=useState('');
 function handleInput(e){
       e.preventDefault();
    alert('hello')
  }
  return (
    <div className="App">
      <header >
       <form id="to-do-form">
           <input type="text" placeholder="Enter the value" value={Item} onChange={handleInput}/>
           <button type="submit">Add</button>
       </form>
      </header>
    </div>
  );
}

export default App;
