import "./styles.css";
import React, { useState, useEffect } from "react";
import { dataSource } from "./data";
import {
  Link
} from 'react-router-dom';


export default function Question(props) {
  // const [QuestionIndex, setQuestionIndex] = useState(0);
  const [myAnswer, setMyAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [finish, setFinish] = useState(false);
  const [show, setShow] = useState(false);
  const [clickAnswer, setClickAnswer] = useState(false);
  const [data, setData] = useState(dataSource(props.username,props.dob));
  const checkAnswer = (variant, i) => {
    setMyAnswer(variant);
    setClickAnswer(true);
    data[props.questionIndex].feedback.length !== 0 && alert(data[props.questionIndex].feedback[i]);
  };

  const checkCorrectAnswer = () => {
    if (data[props.questionIndex].answers.includes(myAnswer)) {
      setScore(score + 1);
    }
  };

  const showAnswer = (variantIndex) => {
    setShow((show) => !show); //better to be toggled like this
  };
  const reset = () => {
    setShow(false);
    setClickAnswer(false);
  };

  const finishHandler = () => {
    if (props.questionIndex === data.length - 1) {
      setFinish(true);
    }
  };

  const startOver = () => {
    props.setQuestionIndex(0);
    setFinish(false);
    setMyAnswer("");
    setScore(0);
  };

  useEffect(() => {
    setData(dataSource(props.username, props.dob))
  }, [props.username, props.dob]
  )

  if (finish) {
    return (
      <div className="container m-4 p-4 mx-auto h-min-screen grid grid-rows-1 grid-cols-1 items-center">
        <div className="wrapper">
          <h3 className="m-4 p-2 h-30 text-center text-2xl font-bold">
            {`The end! You've learned a lot today, woohoo!`}
          </h3>
          <button
            className="w-full h-14 mt-2 px-2 rounded-lg bg-gray-600 text-pink-400 font-bold hover:bg-gray-800 hover:text-pink-600"
            onClick={() => startOver()}
          >
            Let's Go Again!
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container m-4 p-4 mx-auto h-min-screen grid grid-rows-1 grid-cols-1 items-center">
        <div className="wrapper">
          <h2 className="m-4 p-2 h-30 text-center text-2xl font-bold">
            {data[props.questionIndex].question}
          </h2>
          <span className="m-2 border-2 border-black mx-auto px-2 bg-gray-600 text-pink-400 rounded-lg text-center">
            {`${props.questionIndex}/${data.length - 1}`}
          </span>
          <div>
          {data[props.questionIndex].variants.map((variant, i) => (
            <div className="m-2 border-2 border-black mx-auto text-center">
              <p
                key={variant.id}
                className={`variant ${
                  myAnswer === variant
                    ? data[props.questionIndex].answers.includes(myAnswer)
                      ? "correctAnswer"
                      : "incorrectAnswer"
                    : null
                }`}
                onClick={() => checkAnswer(variant, i)}
              >
                {variant.includes(".png") ? <img src={variant}></img> : variant}
              </p>
            </div>
          ))}
          </div>
          

          {clickAnswer && (
            <button
              className="w-full h-14 mt-2 px-2 rounded-lg bg-gray-200 text-blue-400 font-bold hover:bg-gray-400 hover:text-blue-600"
              onClick={() => showAnswer()}
            >
              Show Answer
            </button>
          )}
          {show && (
            <p className="m-2 h-14 mx-auto text-center">
              Correct Answer: {data[props.questionIndex].answers}
            </p>
          )}

          {props.questionIndex == 1 ? (
            <Link to="/q1">
              <button
              className="w-full h-14 mt-2 px-2 rounded-lg bg-gray-600 text-pink-400 font-bold hover:bg-gray-800 hover:text-pink-600"
              onClick={() => {
                props.setQuestionIndex(props.questionIndex + 1);
                  checkCorrectAnswer();
                  reset();
              }}
            >
              NEXT
            </button>
            </Link>
          ) : (
            props.questionIndex < data.length - 1 ? 
            (
              <button
                className="w-full h-14 mt-2 px-2 rounded-lg bg-gray-600 text-pink-400 font-bold hover:bg-gray-800 hover:text-pink-600"
                onClick={() => {
                  props.setQuestionIndex(props.questionIndex + 1);
                  checkCorrectAnswer();
                  reset();
                }}
              >
                NEXT
              </button>
            ) : (<span></span>)
          ) }

          {props.questionIndex === data.length - 1 && (
            <button
              className="w-full h-14 mt-2 px-2 rounded-lg bg-gray-600 text-pink-400 font-bold hover:bg-gray-800 hover:text-pink-600"
              onClick={() => finishHandler()}
            >
              FINISH
            </button>
          )}
        </div>
      </div>
    );
  }
}
