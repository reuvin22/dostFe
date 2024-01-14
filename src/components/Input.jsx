import React from 'react'

function Input({type, name, value, onChange, id}) {
  return (
    <>
        <input type={type} 
        name={name} 
        className='input' 
        value={value} 
        onChange={onChange} 
        id={id}
        required/>
    </>
  )
}

export default Input