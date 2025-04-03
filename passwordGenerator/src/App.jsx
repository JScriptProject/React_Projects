import { useState, useCallback, useEffect, useRef} from 'react'
import './App.css'

function App() {
 
const [length, setLength] = useState(8);
const [numberAllowed , setNumberAllowed] = useState(false);
const [characterAllowed , setCharacterAllowed] = useState(false);
const [password, setPassword] = useState("");

// use ref hook
const passowordRef = useRef(null);
const passwordGenerator = useCallback(() => {
    let pass ="";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if(numberAllowed) str += "0123456789";
    if(characterAllowed) str += "!@#$%^&*()_+";

    for(let i=1; i<=length; i++){
        let char = Math.floor(Math.random() * str.length);
        pass += str.charAt(char);
    }
    setPassword(pass);
}, [length, numberAllowed, characterAllowed, setPassword]);
// mentioned setpassword above to more optimized code 


// copy passowrd to clipboard

const copyPasswordToClipboard = useCallback(()=>{
  passowordRef.current?.select();
  passowordRef.current?.setSelectionRange(0,100);
  window.navigator.clipboard.writeText(password);
},[password])


useEffect(()=>{passwordGenerator()},[length, numberAllowed, characterAllowed, passwordGenerator]);


  return (
    <>
    <div className="container">
      <div className="wrapper">
        <h1 className='title'>Password Generator</h1>
        <div className="input-wrapper">
          <input type="text" placeholder='Password' value={password} readOnly ref={passowordRef} />
          <button className='copyBtn' onClick={copyPasswordToClipboard}>Copy</button>
        </div>
        <div className="input-wrapper gap-2">
          <div className="range-wrapper">
          <input type="range" min={6} max={100} value={length} onChange={(e)=>{setLength(e.target.value)}}/> <label>Length: {length}</label>
          </div>
          <div className="range-wrapper"><input type="checkbox" defaultChecked={numberAllowed} id='numberInput'  onChange={()=> setNumberAllowed((prev)=>!prev)} /><label>Include Numbers</label> </div> 
          <div className="range-wrapper">
            <input type="checkbox" defaultChecked={characterAllowed} id="charasterInput" onChange={()=> setCharacterAllowed((prev)=>!prev)} />
            <label>Include Special Characters</label>
          </div>
          
        </div>
        <p>*Please select the values then click on copy.</p>
      </div>
    </div>
    

    </>
  )
}

export default App
