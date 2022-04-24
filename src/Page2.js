import './styles.css';
import {
    useNavigate
  } from 'react-router-dom';
import React , {useState, useCallback}from 'react'

function Page2(props) {
const [data,setData]=useState(null)
const navigate = useNavigate()
const handleOnClick = useCallback(() => navigate('/', {replace: true}), [navigate])

  function getData(val)
  {
    console.warn(val.target.value)
    setData(val.target.value)
  }

  return (
    <div>
     
    <h1> {props.username}</h1>
       
     <h1> Birthday? </h1>
    <input type="text" onChange={getData} />
    <button onClick={()=>props.setUsername(data)} >Print Data</button>
    <button onClick={handleOnClick}>Next Page</button>

    </div>
  );
}

export default Page2;