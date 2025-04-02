import { useState } from "react";
import './index.css'
import Clickbtn from "./Clickbtn.jsx";

function ChangeColor(){

  const [color, setColor] = useState("olive");
    return(
      <>
      <div className="container1" style={{backgroundColor: color}}>
        <div className="bar-container">
         <div className="bar">
          <Clickbtn newColor = "red" textColor="Red" setColor={setColor}/>
          <Clickbtn newColor = "green" textColor="Green" setColor={setColor} />
          <Clickbtn newColor = "blue" textColor="Blue" setColor={setColor} /> 
         </div>
        </div>
      </div>
      </>
    )
}

export default ChangeColor;