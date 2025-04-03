import './App.css';
import { useCallback, useEffect, useRef, useState } from 'react';

function AppNew(){


    // declare state varaibles

    const [length, setLength] = useState(8);
    const [includeNumbers, setIncludeNumbers] = useState(false);
    const [includeCharacters, setIncludeCharacters] = useState(false);
    const [password, setPassword] =useState("");

    const passwordGenerator = useCallback(()=>{
        let pass ="";
        let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if(includeNumbers) str +='1234567980';
        if(includeCharacters) str +='!@#$%^&*()_+';
        for(let i =0;i<length; i++)
        {
            let char = Math.floor(Math.random() * str.length +1);
            pass += str.charAt(char);
        }
        setPassword(pass);
    },[length, includeNumbers, includeCharacters])
  console.log(password);
    useEffect(()=>{
        passwordGenerator();
    },[passwordGenerator]);


    // Copy passowrd to clipboard
    const passwordRef = useRef(null);
    const copyPasswordToClipboard = useCallback(()=>{
        passwordRef.current?.select();
        window.navigator.clipboard.writeText(password);
    }, [password])
    return(
        <>
          <div className="container">
            <div className="wrapper">
                <h1 className="title">Passowrd Generator</h1>
                <div className="input-wrapper">
                    <input type="text" placeholder="Password" value={password} ref={passwordRef} readOnly/>
                    <button className="copyBtn" onClick={copyPasswordToClipboard}  >Copy</button>
                </div>
                <div className="input-wrapper gap-2">
                    <div className="range-wrapper">
                        <input type="range" min={8} max={20} onChange={(e)=>setLength(e.target.value)} /> <label>Length: {length}</label>
                    </div>
                    <div className="range-wrapper">
                        <input type="checkbox" onChange={()=>{setIncludeNumbers((prev)=> !prev)}}/> <label>Include Numbers</label>
                    </div>
                    <div className="range-wrapper">
                        <input type="checkbox" onChange={()=>setIncludeCharacters((prev)=> !prev)}/> <label>Include Special Characters</label>
                    </div>
                </div>
            </div>
          </div>
        </>
    )
}

export default AppNew;