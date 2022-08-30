import React, {useState} from 'react'
import './sedebarCadr.scss'


 function SedebarCadr(props) {
  const [pressed, setPressed] = useState(false);
 const clickMe = ()=>{
    setPressed(!pressed)
  }
  return (
    <div className='cards'>
    <div className='cards__text'>{props.english}</div>
    <div className='cards__transcript'>{props.transcription}</div>
    <button className='cards__btn' onClick={clickMe}>{pressed ? props.russian : "Сheck"}</button> 
    </div>

    
  )
  
}

 

export default SedebarCadr
