/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

const Button = (props) => {
  return (
    <div className='btn'>
        <button onClick={props.onClick}>{props.title}</button>
    </div>
  )
}

export default Button