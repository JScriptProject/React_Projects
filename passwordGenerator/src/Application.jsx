import { useState, useEffect, useCallback, useRef } from 'react';
import './App.css'


function Application(){

    // create state variables
    // In created app we have 4 states which will change basis on use behaviour hence selected all 4 states.
    const[length, setLength] = useState(8);
    const[numberAllowed, setNumberAllowed] = useState(false);
    const[characterAllowed, setCharacterAllowed] = useState(false);
    const[passowrd, setPassword] = useState("")

    // Password Genertor function
    const passwordGenerator = useCallback(()=>{
        let pass= "";
        let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

        if(numberAllowed) str += "1234567980";
        if(characterAllowed) str +="!@#$%^&*()_+";

        console.log(str);

        for(let i=0; i<length;i++)
        {
          let newChar;
          let index = Math.floor(Math.random() * str.length +1);
          newChar = str.charAt(index);
          pass += newChar;
        }
        console.log(pass);
        setPassword(pass);

    },[length, numberAllowed,characterAllowed])

    //passwordGenerator(); If I call passord generator here then it wil create the inifinite loop hence use the useEffect hook

    useEffect(()=>{passwordGenerator();},[passwordGenerator])

    // Copy the password to clipboard

    const passowordRef = useRef(null);
    const copyPasswordToClipboard = useCallback(()=>{
       passowordRef.current?.select();
       passowordRef.current?.setSelectionRange(0,100);
       window.navigator.clipboard.writeText(passowrd);
    },[passowrd])
    return(
        <>
        <div className="container">
            <div className="wrapper">
                <h1 className="title">Password Generator</h1>
                <div className="input-wrapper">
                    <input type="text" value={passowrd} placeholder='Password' readOnly ref={passowordRef} />
                    <button className="copyBtn" onClick={copyPasswordToClipboard}>Copy</button>
                </div>
                <div className="input-wrapper gap-2">
                    <div className="range-wrapper">
                    <input type="range" min={8} max={100} onChange={(e)=> setLength(e.target.value)}  /> <label> Length = {length}</label>
                    </div>
                    <div className="range-wrapper">
                        <input type="checkbox" onChange={(e)=> setNumberAllowed((prev)=>!prev)} /> <label>Include Numbers</label>
                    </div>
                    <div className="range-wrapper"><input type="checkbox" onChange={()=> setCharacterAllowed((prev1)=> !prev1)}/><label>Include Special Character</label></div>
                </div>

            </div>
        </div>
        </>
    )
}

export default Application;