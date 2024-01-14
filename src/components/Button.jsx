import React from 'react'

function Button({name, className, btnName}) {
  return (
    <>
        <button className={className} name={name}>{btnName}</button>
    </>
  )
}

export default Button