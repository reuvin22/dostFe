import React, { useEffect, useState } from 'react'
import axios from 'axios';

function Data() {
    const [numbers, setNumbers] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await axios.get('http://localhost:8000/api/attendance', numbers);
                setNumbers(response.data);
                console.log(response.data);
            }catch(err){
                console.error(err);
            }
        }

        fetchData();
    }, []);
  return (
    <>
        {Object.entries(numbers).map(([key,value]) => {
            return <li key={key}>{value}</li>
        })}
    </>
  )
}

export default Data