import './styles.css';
import {
    useNavigate
} from 'react-router-dom';
import React, { useState, useCallback } from 'react'

function Page1(props) {
    const [data, setData] = useState(null)
    const navigate = useNavigate()
    const handleOnClick = useCallback(() => {

        if (data && data.length > 0) {
            props.setUsername(data)
            navigate('/q2', { replace: true })
        } else {
            alert('name required!')
        }
    });

    function getData(val) {
        console.warn(val.target.value)
        setData(val.target.value)
    }

    return (
        <div className="container m-4 p-4 mx-auto h-min-screen grid grid-rows-1 grid-cols-1 items-center">

            <h1> {props.username}</h1>

            <h1> What’s your name? (We’re not stealing that from you!) </h1>
            <input 
            type="text"
            onChange={getData} />
            <button className="w-100 h-14 mt-2 px-2 rounded-lg bg-gray-600 text-pink-400 font-bold hover:bg-gray-800 hover:text-pink-600"
             onClick={handleOnClick}>Next</button>

        </div>
    );
}

export default Page1;