import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Logo from '../img/DOST.png'

function Data() {
  const [numbers, setNumbers] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await axios.get('http://localhost:8000/api/attendance');
        const response = await axios.get('https://atsdevs.org/dost/public/api/attendance');
        setNumbers(response.data.data);
        console.log(response.data.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  }
  return (
    <>
      <div className='grid place-items-center w-screen h-screen bg-cyan-600'>
        <div className='grid place-items-center 
        xl:w-2/5 xl:h-4/5 
        sm:w-4/5 md:w-3/5 lg:w-2/5
        border-2 border-white rounded-lg'>
            <img src={Logo} alt="DOST Logo" className='h-20 w-30'/>
            <h1 className='text-2xl font-bold my-6 text-white'>DOST ATTENDANCE</h1>
            <ul className='grid gap-11'>
                {Object.entries(numbers).map(([key, value], index) => (
                    <li key={index} className='text-2xl font-semibold text-white'>{key} : {value}</li>
                ))}
            </ul>
            <button className='bg-blue-600 text-white h-11 w-48 my-6 hover:bg-red-600 transition-all rounded-lg' onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </>
  );
}

export default Data;
