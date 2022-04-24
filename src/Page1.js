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
            navigate('/q2', { replace: true })
        } else {
            alert('hihi')
        }
    });

    function getData(val) {
        console.warn(val.target.value)
        setData(val.target.value)
    }

    return (
        <div>

            <h1> {props.username}</h1>

            <h1> What's your name? </h1>
            <input type="text" onChange={getData} />
            <button onClick={() => props.setUsername(data)} >Print Data</button>
            <button onClick={handleOnClick}>Next Page</button>

        </div>
    );
}

export default Page1;