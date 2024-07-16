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
  const [error, setError] = useState("");
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
      // const response = await axios.post('http://localhost:8000/api/login', login, {
      //   headers: {
      //   'Content-Type': 'application/json'
      //   }
      // });
      const response = await axios.post('https://reuvindevs.com/dost/public/api/login', login, {
        headers: {
        'Content-Type': 'application/json'
        }
      });
      console.log(response.data);
      const apiToken = response.data.token;
      localStorage.setItem('token', apiToken);
      navigate('/attendance');
    } catch (err) {
      setError(err.response.data.message);
    }
  };
  return (
    <>
      <div className='grid place-items-center w-screen h-screen bg-blue-500'>
        <div className='grid place-items-center border-2 border-white rounded-3xl bg-cyan-500
        xl:w-4/12
        xl:h-1/2
        2xl:h-96'>
          <form onSubmit={handleSubmit} className='grid place-items-center'>
            <h1 className='text-3xl font-bold text-white'>ADMIN LOGIN</h1>
            <h3 className='messageError'>{error}</h3>
            <Label
              htmlFor="email"
              label="Email"
              className="text-2xl my-2 text-white"
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
              className="text-2xl my-2 mx-2 text-white"
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
            <Link to="/" className='text-white text-xl font-bold hover:text-blue-800'>Back to Form</Link>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login;
