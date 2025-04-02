import { useState } from "react";
import './index.css';
import CreateButton from "./CreateButton";

function Application(){
  const [color, setColor] = useState("pink");
  const [selectedButton, setSelectedButton] = useState("null");
    return(
        <>
         <div className="container1" style={{backgroundColor: color}}>
            <div className="bar-container">
                <div className="bar">
                    <CreateButton newColor = "Blue" applyColor = {setColor} isSelected={selectedButton=== 'Blue'} onSelect={()=>setSelectedButton("Blue")}/>
                    <CreateButton newColor = "Red" applyColor = {setColor} isSelected={selectedButton==="Red"} onSelect={()=>setSelectedButton("Red")} />
                    <CreateButton newColor = "Green" applyColor = {setColor} isSelected={selectedButton==="Green"} onSelect={()=>setSelectedButton("Green")} />
                    <CreateButton newColor = "Purple" applyColor = {setColor} isSelected={selectedButton==="Purple"} onSelect={()=>setSelectedButton("Purple")} />
                </div>
            </div>
         </div>
        </>
    )
}

export default Application; 