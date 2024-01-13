import React, { useEffect } from 'react'
import { useState } from 'react'
function Form() {
  return (
    <>
        <div className="flex items-center justify-center w-screen h-screen border-yellow border-8 border-orange-500">
          <form className='grid border-slate-500 
          sm:w-11/12 md:w-2/4 lg:w-2/4 xl:w-96 
          sm:h-11/12 md:w-2/4 xl:h-4/6 border-2 rounded-lg' action=''>
            <legend className='text sm:text-2xl md:text-3xl xl:text-3xl font-bold text-blue-500 place-self-center my-6'>DOST ATTENDANCE</legend>
            <label className='text-2xl font-semibold mx-10 sm:justify-self-center' htmlFor="fname">First Name</label>
            <input type="text" name='fname' className='border-2 rounded-lg h-9 w-3/4 px-5 mx-10 sm:justify-self-center'/>
            <label className='text-2xl font-semibold sm:justify-self-center mx-10' htmlFor="lname">Last Name</label>
            <input type="text" name='lname' className='border-2 rounded-lg h-9 w-3/4 px-5 mx-10 sm:justify-self-center'/>
            <label className='text-2xl font-semibold mx-10 sm:justify-self-center' htmlFor="school">School</label>
            <input type="text" name='school' className='border-2 rounded-lg h-9 w-3/4 px-5 mx-10 sm:justify-self-center'/>
            <label className='text-2xl font-semibold mx-10 sm:justify-self-center' htmlFor="school">Age</label>
            <input type="text" name='age' className='border-2 rounded-lg h-9 w-3/4 px-5 mx-10 sm:justify-self-center'/>
            <label className='text-2xl font-semibold mx-10 sm:justify-self-center' htmlFor="contactNumber">Contact Number</label>
            <input type="text" name='age' className='border-2 rounded-lg h-9 w-3/4 px-5 mx-10 sm:justify-self-center'/>
            <button className='h-10 w-1/2 justify-self-center my-5 bg-blue-300 rounded-2xl text-white font-semibold' name='submit'>Submit</button>
          </form>
        </div>
    </>
  )
}

export default Form