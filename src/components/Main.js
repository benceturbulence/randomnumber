import React from 'react'
import {useState} from 'react'
import {getRandomInt} from '../functions/generateNumber'
function Main() {

  const [min, setMin] = useState(0)
  const [max, setMax] = useState(999)
  const [generatedNumber, setGeneratedNumber] = useState(null)


  getRandomInt(min, max)


  const toggleClick = () =>{
    let random = getRandomInt(min, max)
    setGeneratedNumber(random)
  }

  return (
    <div className='content-container'>
      <div className='input-container'>
        <div className='col'>
          <h3>Minimum</h3>
          <input type="number" value={min} onChange={(e) => setMin(e.target.value)} placeholder="0"/>
        </div>
        <div className='col'>
          <h3>Maximum</h3>
          <input type="number" value={max} onChange={(e) => setMax(e.target.value)} placeholder="999" />
        </div>
      </div>
      <button className='btn' onClick={toggleClick}>Generate number 🎲</button>
      <div className='numberContainer'>
        {generatedNumber && <h2 className='generatedNumber'>{generatedNumber}</h2>}
      </div>
    </div>
  )
}

export default Main