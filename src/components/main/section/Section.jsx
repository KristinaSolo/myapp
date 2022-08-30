import React from 'react';
import './section.scss';
import Wordsection from './Wordsection';
import { words } from '../../data/json/words.js'
import SedebarCadr from '../sedebar/SedebarCadr';



 function Section() {
  return (
 <div className='section'>
  <div className='section__table'>
 <table className='table'>
<tr className='table__name'>
<th className='table__num'>#</th>
<th className='table__title'>English</th>
<th className='table__title'>Transcription</th>
<th className='table__title'>Russian</th>
<th>#</th>
</tr>
    {
words.map((word) =>
<Wordsection number={word.number} english={word.english} transcription={word.transcription} russian={word.russian}/>
)
    }
    </table>
    </div>
<div className='section__cards'>
    {
      words.map((card) =>
      <SedebarCadr english={card.english} transcription={card.transcription} russian={card.russian}/>)
    }
</div>


    </div>
      

  )
}

export default Section
