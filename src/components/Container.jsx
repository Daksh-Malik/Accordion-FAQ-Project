import React from 'react'
import Question from './Question'
import data from '../data/data'

export default function Container() {
  return (
    <div className='container'>
        <h1>FAQ</h1>
        <div className='inner-container'>
            {data.map(item => {
                return <Question object={item}/>
            })}
        </div>
    </div>
  )
}
