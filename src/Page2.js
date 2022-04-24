import './styles.css';
import {
    useNavigate
  } from 'react-router-dom';
import React , {useState, useCallback}from 'react'

function Page2(props) {
const [data,setData]=useState(null)
const navigate = useNavigate()
const handleOnClick = useCallback(() => {

  if (data && data.length > 0) {
      props.setBirthday(data)
      navigate('/question', { replace: true })
  } else {
      alert('birthday required!')
  }
});

  function getData(val)
  {
    console.warn(val.target.value)
    setData(val.target.value)
  }

  return (
    <div>
       
     <h1> What's your date of birth? (We promise!) </h1>
    <input type="text" onChange={getData} />
    <button onClick={handleOnClick}>Next Page</button>

    </div>
  );
}

export default Page2;