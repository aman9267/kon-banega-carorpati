import React, { useEffect, useState } from "react";
import "./trivia.css";

const Trivia = ({ data, questionActive, setQuestionActive }) => {
  const [question, setQuestion] = useState(1);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [className, setClassName] = useState("null");
  useEffect(() => {
    setQuestion(data[questionActive - 1]);
  }, [data, questionActive, selectedAnswer]);

  const [wrong, setWrong] = useState(true);

  const delay = (duration, callback) => {
    setTimeout(() => {
      callback();
    }, duration);
  };

  const handleClick = (answer) => {
    setSelectedAnswer(answer);
    setClassName("answer active");

    delay(3000, () => {
      setClassName(answer.correct === true ? "answer correct" : "answer wrong");
    });
    delay(7000, () => {
      if (answer.correct) {
        setQuestionActive((pre) => pre + 1);
      } else {
        setWrong(false);
      }
    });
  };
  return (
    <>
      {wrong ? (
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
      ) : (
        <div className="false__answer">
          <div className="false__model">
            <h3>Opp! Wrong answer you winning price</h3>
            <h2>₹{question.price}</h2>
            <a href="/">Restart The Game</a>
          </div>
        </div>
      )}
    </>
  );
};

export default Trivia;
