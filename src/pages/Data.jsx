import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Logo from '../img/DOST.png'

function Data() {
  const [numbers, setNumbers] = useState([]);
  const [reset, setReset] = useState(false);
  const [notif, setNotif] = useState('');
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await axios.get('http://localhost:8000/api/attendance', {
        //   headers: {
        //     'Authorization': `Bearer ${token}`
        //   }
        // });
        const response = await axios.get('https://atsdevs.org/dost/public/api/attendance', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        setNumbers(response.data.data);
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
  const resetNotif = () => {
    setReset(!reset);
  }

  const deleteData = async () => {
    try {
      // const response = await axios.delete('http://localhost:8000/api/reset', {
      //   headers: {
      //     'Authorization': `Bearer ${token}`
      //   }
      // });
      const response = await axios.delete('https://atsdevs.org/dost/public/api/reset', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      setNotif(response.data.message);
      setReset(!reset);
    } catch (error) {
      setNotif(error);
    }
  }
  return (
    <>
      <div className='grid place-items-center w-screen h-screen bg-blue-500'>
      <div className={reset ? 'resetNotif block' :'hidden' }>
        <h1 className='grid place-items-center text-2xl text-center'>Are you sure you want to reset the data?</h1>
        <div className='flex gap-2 justify-center'>
          <button className='bg-blue-600 text-white h-11 w-36 my-6 hover:bg-green-600 transition-all rounded-lg' onClick={resetNotif}>Back</button>
          <button className='bg-blue-600 text-white h-11 w-36 my-6 hover:bg-red-600 transition-all rounded-lg' onClick={deleteData}>Reset</button>
        </div>
      </div>
        <div className='grid place-items-center 
        sm:w-screen
        xl:w-4/12
        xl:h-1/2
        border-2 border-white rounded-lg
        bg-cyan-500'>
            <img src={Logo} alt="DOST Logo" className='h-20 w-30'/>
            <h1 className='sm:text-2xl text-3xl text-center font-bold my-6 text-white'>DOST SCIENCE FAIR ATTENDEE</h1>
            <h1 className='font-bold text-red-800'>{notif}</h1>
            <ul className='grid gap-11 '>
                {Object.entries(numbers).map(([key, value], index) => (
                    <li key={index} className='text-2xl sm:text-xl font-semibold text-white'>{key} : {value === null ? 0 : value}</li>
                ))}
            </ul>
            <div className='flex gap-5'>
              <button className='bg-blue-600 text-white h-11 w-48 my-6 hover:bg-blue-300 transition-all rounded-lg' onClick={handleLogout}>Logout</button>
              <button className='bg-red-600 text-white h-11 w-3/4 my-6 hover:bg-red-300 transition-all rounded-lg' onClick={resetNotif}>Reset</button>
            </div>
        </div>
      </div>
    </>
  );
}

export default Data;
