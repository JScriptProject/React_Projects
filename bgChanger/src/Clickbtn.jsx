import './index.css';

function Clickbtn(props){
    console.log(props)
   return(
    <>
    <button onClick={()=> props.setColor(props.newColor)} className="btn btn-red" style={{backgroundColor:props.newColor}}>{props.textColor}</button>
    </>
   )
}

export default Clickbtn;