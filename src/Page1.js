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
        <div>

            <h1> {props.username}</h1>

            <h1> What’s your name? (We’re not stealing that from you!) </h1>
            <input type="text" onChange={getData} />
            <button onClick={handleOnClick}>Next Page</button>

        </div>
    );
}

export default Page1;