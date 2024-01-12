import { useState } from "react";
import "./App.css";
import Trivia from "./components/Trivia";
function App() {

  const [questionActive, setQuestionActive] = useState(1)
  const [timeStop, setTimeStop] = useState(false)
  const moneyPyramid = [
    { id: 1, amount: "1,000" },
    { id: 2, amount: "2,000" },
    { id: 3, amount: "3,000" },
    { id: 4, amount: "5,000" },
    { id: 5, amount: "10,000" },
    { id: 6, amount: "20,000" },
    { id: 7, amount: "40,000" },
    { id: 8, amount: "80,000" },
    { id: 9, amount: "1,60,000" },
    { id: 10, amount: "3,20,000" },
    { id: 11, amount: "6,40,000" },
    { id: 12, amount: "12,50,000" },
    { id: 13, amount: "25,00,000" },
    { id: 14, amount: "50,00,000" },
    { id: 15, amount: "1 Crore" },
    { id: 16, amount: "7 Crore" },
  ].reverse();



    const data = [
      {
        id: 1,
        question: "Rolex is a company that specializes in what type of product?",
        answers: [
          {
            text: "Phone",
            correct: false,
          },
          {
            text: "Watches",
            correct: true,
          },
          {
            text: "Food",
            correct: false,
          },
          {
            text: "Cosmetic",
            correct: false,
          },
        ],
      },
      {
        id: 2,
        question: "When did the website `Facebook` launch?",
        answers: [
          {
            text: "2004",
            correct: true,
          },
          {
            text: "2005",
            correct: false,
          },
          {
            text: "2006",
            correct: false,
          },
          {
            text: "2007",
            correct: false,
          },
        ],
      },
      {
        id: 3,
        question: "Who played the character of harry potter in movie?",
        answers: [
          {
            text: "Johnny Deep",
            correct: false,
          },
          {
            text: "Leonardo Di Caprio",
            correct: false,
          },
          {
            text: "Denzel Washington",
            correct: false,
          },
          {
            text: "Daniel Red Cliff",
            correct: true,
          },
        ],
      },
    ];

    console.log(data)

  return (
    <>
      <div className="app">
        <div className="main">
          <div className="top">
            <div className="timer">30</div>
          </div>
          <div className="bottom">
            <Trivia data={data} questionActive={questionActive} setStop={timeStop} setQuestionActive={setQuestionActive} />
          </div>
        </div>
        <div className="pyramid">
          <ul className="money-list">
            {moneyPyramid.map((m) => {
              return (
                <li className={questionActive === m.id ? "money-list-items active": "money-list-items"} key={m.id}>
                  <span className="money-list-number">{m.id}</span>
                  <span className="money-list-amount">{m.amount}</span>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
