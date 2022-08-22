import React from 'react'
import './wordsection.scss'

function Wordsection(props) {
  return (
    <div>
      <tr className='table__words'>
<th className='table__num'>{props.number}</th>
<td className='table__text'>{props.english}</td>
<td className='table__text'>{props.transcription}</td>
<td className='table__text'>{props.russian}</td>
<div className='table__btn'>
<button className='table__add'>delete</button>
<button className='table__add'>fix</button></div>
</tr>
    </div>
  )
}

export default Wordsection

