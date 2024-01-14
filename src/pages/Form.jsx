import React from 'react'
import Input from '../components/Input'
import Label from '../components/Label'
import Button from '../components/Button'
import { useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
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
          <form className='form' onSubmit={handleSubmit}>
            <legend className='legend'>DOST STUDENT ATTENDANCE</legend>
            <Label 
              htmlFor="firstName"
              label="First Name"
              className="label"
            />
            <Input 
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInput}
              id="firstName"
            />
            <Label 
              htmlFor="lastName"
              label="Last Name"
              className="label"
            />
            <Input 
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInput}
              id="lastName"
            />
            <Label 
              htmlFor="school"
              label="School"
              className="label"
            />
            <Input 
              type="text"
              name="school"
              value={formData.school}
              onChange={handleInput}
              id="school"
            />
            <Label 
              htmlFor="age"
              label="Age"
              className="label"
            />
            <Input 
              type="text"
              name="age"
              value={formData.age}
              onChange={handleInput}
              id="age"
            />
            <Label 
              htmlFor="contactNumber"
              label="Contact Number"
              className="label"
            />
            <Input 
              type="text"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleInput}
              id="contactNumber"
            />
            <Label 
              htmlFor="gender"
              label="Gender"
              className="label"
            />
            <Input 
              type="text"
              name="gender"
              value={formData.gender}
              onChange={handleInput}
              id="gender"
            />
            <Label 
              htmlFor="grade"
              label="Grade"
              className="label"
            />
            <Input 
              type="text"
              name="grade"
              value={formData.grade}
              onChange={handleInput}
              id="grade"
            />
            <Button 
                className='button'
                name='submit'
                btnName='Login'
              />
            <Link to="/login" className='justify-self-center text-xl hover:text-blue-900 font-bold'>Login</Link>
          </form>
        </div>
    </>
  )
}

export default Form