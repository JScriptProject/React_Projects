import { useState, useCallback } from 'react'
import './App.css'

function App() {
 
const [length, setLength] = useState(8);
const [numberAllowed , setNumberAllowed] = useState(false);
const [characterAllowed , setCharacterAllowed] = useState(false);
const [password, setPassword] = useState("");

const passwordGenerator = useCallback(() => {
    const pass ="";
    const str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if(numberAllowed) str += "0123456789";
    if(characterAllowed) str += "!@#$%^&*()_+";

    for(let i=1; i<= array.length; i++){
        let char = Math.floor(Math.random() * str.length);
        pass = str.charAt(char);
    }
    setPassword(pass);
}, [length, numberAllowed, characterAllowed, setPassword]);

  return (
    <>
    <div className="container">
      <div className="wrapper">
        <h1 className='title'>Password Generator</h1>
        <div className="input-wrapper">
          <input type="text" placeholder='Password' value={password} readOnly />
          <button className='copyBtn'>Copy</button>
        </div>
      </div>
    </div>
    

    </>
  )
}

export default App
