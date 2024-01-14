import React from 'react'
import { useState } from 'react'
import axios from 'axios';
function Form() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    school: '',
    age: '',
    contactNumber: '',
    gender: '',
    grade: ''
  });

  const handleInput = (event) => {
    const { name, value } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  }
    const handleSubmit = async (event) => {
      event.preventDefault();
      try {
          const response = await axios.post('http://localhost:8000/api/attendance', formData, {'Content-type': 'application/json'});
          console.log(response.data);
      } catch (err) {
          console.error(err);
      }
  }

  return (
    <>
        <div className="flex items-center justify-center w-screen h-screen border-yellow border-8 border-orange-500">
          <form className='grid border-slate-500 
          sm:w-11/12 md:w-2/4 lg:w-2/4 xl:w-96 
          sm:h-11/12 xl:h-5/6 border-2 rounded-lg' onSubmit={handleSubmit}>
            <legend className='text sm:text-2xl md:text-3xl xl:text-3xl font-bold text-blue-500 place-self-center my-6'>DOST ATTENDANCE</legend>
            <label className='label' htmlFor="fname">First Name</label>
            <input type="text" name='firstName' className='input' value={formData.firstName} onChange={handleInput}/>
            <label className='label' htmlFor="lname">Last Name</label>
            <input type="text" name='lastName' className='input' value={formData.lastName} onChange={handleInput}/>
            <label className='label' htmlFor="school">School</label>
            <input type="text" name='school' className='input' value={formData.school} onChange={handleInput}/>
            <label className='label' htmlFor="school">Age</label>
            <input type="text" name='age' className='input' value={formData.age} onChange={handleInput}/>
            <label className='label' htmlFor="contactNumber">Contact Number</label>
            <input type="text" name='contactNumber' className='input' value={formData.contactNumber} onChange={handleInput}/>
            <label className='label' htmlFor="gender">Gender</label>
            <input type="text" name='gender' className='input' value={formData.gender} onChange={handleInput}/>
            <label className='label' htmlFor="grade">Grade</label>
            <input type="text" name='grade' className='input' value={formData.grade} onChange={handleInput}/>
            <button className='h-10 w-1/2 justify-self-center my-5 bg-blue-300 rounded-2xl text-white font-semibold' name='submit'>Submit</button>
          </form>
        </div>
    </>
  )
}

export default Form