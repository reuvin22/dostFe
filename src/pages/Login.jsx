import React from 'react'
import Label from '../components/Label'
import Input from '../components/Input'
import Button from '../components/Button'
import Form from './Form'
import { useState } from 'react'
import axios from 'axios'; // Don't forget to import axios
import { Link, useNavigate } from 'react-router-dom'
function Login() {
  const [login, setLogin] = useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate();
  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setLogin(prevLogin => ({
      ...prevLogin,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('https://atsdevs.org/dost/public/api/login', login, {
        headers: {
        'Content-Type': 'application/json'
        }
      });
      console.log(response.data);
      const apiToken = response.data.token;
      localStorage.setItem('token', apiToken);
      navigate('/attendance');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div className='grid place-items-center w-screen h-screen'>
        <div className='grid place-items-center border-2 border-cyan-700 xl:w-4/12 h-1/2 rounded-3xl'>
          <form onSubmit={handleSubmit} className='grid place-items-center'>
            <h1 className='text-3xl font-bold text-blue-500'>ADMIN LOGIN</h1>
            <Label
              htmlFor="email"
              label="Email"
              className="text-2xl my-2"
            />
            <Input
              type="text"
              name="email"
              value={login.email}
              onChange={handleChange}
              id="email"
            />
            <Label
              htmlFor="password"
              label="Password"
              className="text-2xl my-2 mx-2"
            />
            <Input
              type="password"
              name="password"
              value={login.password}
              onChange={handleChange}
              id="password"
            />
            <Button
              className='button'
              name='submit'
              btnName='Login'
            />
            <Link to="/">Back to Form</Link>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login;
