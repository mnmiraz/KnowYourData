import React, {useState} from 'react';
import {
  BrowserRouter as Router, Route, Routes
} from 'react-router-dom';
import './styles.css';
import Question from './Question.js';
import Page1 from './Page1.js';
import Page2 from './Page2.js';

function App() {
    const [username, setUsername] = useState("")
    const [dob, setBirthday] = useState("")
    const [questionIndex, setQuestionIndex] = useState(0)
  return (
    <main>
      <Router>
        <div>
          <Routes>
            <Route path="/q1" element={<Page1 
            // props drilling, bad because you have to drill all the way down 
            username={username} 
            setUsername={setUsername}
            dob={dob} 
            setBirthday={setBirthday}
            />} />
            <Route path="/q2" element={<Page2
            // props drilling, bad because you have to drill all the way down 
            username={username} 
            setUsername={setUsername}
            dob={dob} 
            setBirthday={setBirthday}
            />} />
            <Route path="/" element={<Question 
            questionIndex={questionIndex} 
            setQuestionIndex={setQuestionIndex}
            username={username} 
            setUsername={setUsername}
            dob={dob} 
            setBirthday={setBirthday}
            />}/>
          </Routes>
        </div>
      </Router>
    </main>
  );
}

export default App;