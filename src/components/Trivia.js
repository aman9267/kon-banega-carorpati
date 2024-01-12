import React, { useEffect, useState } from "react";

const Trivia = ({ data, questionActive, setTimeStop, setQuestionActive }) => {
  const [question, setQuestion] = useState(1);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [className, setClassName] = useState("null");
  useEffect(() => {
    setQuestion(data[questionActive - 1]);
  }, [data, questionActive, selectedAnswer]);

  const delay = (duration, callback) => {
    setTimeout(() => {
      callback()
    }, duration);
  };

  console.log(selectedAnswer);
  const handleClick = (answer) => {
    setSelectedAnswer(answer);
    setClassName("answer active");

    delay(3000, ()=>{
      setClassName(answer.correct === true ? "answer correct" : "answer wrong");
    })
    delay(7000, () => {
      if (answer.correct) {
        setQuestionActive((pre) => pre + 1);
        // setQuestionActive(null);
      } else {
        setTimeStop(true);
      }
    });
  };
  return (
    <div className="trivia">
      <div className="question">{question.question}</div>
      <div className="answers">
        {question?.answers?.map((answer) => {
          return (
            <div
              key={answer?.id}
              onClick={() => handleClick(answer)}
              className={selectedAnswer === answer ? className : "answer"}
            >
              {answer?.text}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Trivia;
