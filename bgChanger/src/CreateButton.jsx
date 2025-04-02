import './index.css';

function CreateButton({newColor, applyColor, isSelected, onSelect}){
    return(
        <button onClick={()=>{applyColor(newColor); onSelect();}} className="btn" style={{backgroundColor:newColor , border: isSelected ? "3px solid black" : "none"}}>{newColor}</button>
    )
}


export default CreateButton;