import React from 'react';
import './section.scss';
import Wordsection from './Wordsection';
import { words } from '../../data/json/words.js'



 function Section() {
  return (
    <div className='section'>
  
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
      

  )
}

export default Section
