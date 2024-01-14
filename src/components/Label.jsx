import React from 'react'

function Label({htmlFor, label, className}) {
  return (
    <>
        <label className={className} htmlFor={htmlFor}>{label}</label>
    </>
  )
}

export default Label