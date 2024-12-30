/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'

const InputBox = (props) => {
  return (
    <div className='inputBox'>
        <input value={props.value} onChange={props.onChange} />
        <p className= {props.class}>{props.value}</p>
    </div>
  )
}

export default InputBox