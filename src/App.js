import { useState } from "react";
import "./App.css";
import Trivia from "./components/Trivia";
function App() {
  const [questionActive, setQuestionActive] = useState(1);

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
      price: 1000,
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
      price: 2000,
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
      price: 3000,
      question: "Who is the author of the Harry Potter book series?",
      answers: [
        {
          text: "J.R.R. Tolkien",
          correct: false,
        },
        {
          text: "J.K. Rowling",
          correct: true,
        },
        {
          text: "George R.R. Martin",
          correct: false,
        },
        {
          text: "Dan Brown",
          correct: false,
        },
      ],
    },
    {
      id: 4,
      price: 5000,
      question: "What is the capital of Australia?",
      answers: [
        {
          text: "Sydney",
          correct: false,
        },
        {
          text: "Melbourne",
          correct: false,
        },
        {
          text: "Canberra",
          correct: true,
        },
        {
          text: "Perth",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      price: 10000,
      question: "Who painted the Mona Lisa?",
      answers: [
        {
          text: "Vincent van Gogh",
          correct: false,
        },
        {
          text: "Pablo Picasso",
          correct: false,
        },
        {
          text: "Leonardo da Vinci",
          correct: true,
        },
        {
          text: "Michelangelo",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      price: 20000,
      question: "What is the largest ocean in the world?",
      answers: [
        {
          text: "Atlantic Ocean",
          correct: false,
        },
        {
          text: "Indian Ocean",
          correct: false,
        },
        {
          text: "Arctic Ocean",
          correct: false,
        },
        {
          text: "Pacific Ocean",
          correct: true,
        },
      ],
    },
    {
      id: 7,
      price: 40000,
      question: "Which planet is known as the Red Planet?",
      answers: [
        {
          text: "Venus",
          correct: false,
        },
        {
          text: "Mars",
          correct: true,
        },
        {
          text: "Jupiter",
          correct: false,
        },
        {
          text: "Saturn",
          correct: false,
        },
      ],
    },
    {
      id: 8,
      price: 80000,
      question: "Who wrote the play Romeo and Juliet?",
      answers: [
        {
          text: "William Shakespeare",
          correct: true,
        },
        {
          text: "Jane Austen",
          correct: false,
        },
        {
          text: "Charles Dickens",
          correct: false,
        },
        {
          text: "F. Scott Fitzgerald",
          correct: false,
        },
      ],
    },
    {
      id: 9,
      price: 160000,
      question: "What is the currency of Japan?",
      answers: [
        {
          text: "Yen",
          correct: true,
        },
        {
          text: "Euro",
          correct: false,
        },
        {
          text: "Dollar",
          correct: false,
        },
        {
          text: "Rupee",
          correct: false,
        },
      ],
    },
    {
      id: 10,
      price: 320000,
      question:
        "Which country is home to the famous ancient monument Stonehenge?",
      answers: [
        {
          text: "France",
          correct: false,
        },
        {
          text: "United Kingdom",
          correct: true,
        },
        {
          text: "Italy",
          correct: false,
        },
        {
          text: "Egypt",
          correct: false,
        },
      ],
    },
    {
      id: 11,
      price: 620000,
      question: "Which country is known as the Land of the Rising Sun?",
      answers: [
        {
          text: "China",
          correct: false,
        },
        {
          text: "South Korea",
          correct: false,
        },
        {
          text: "Japan",
          correct: true,
        },
        {
          text: "Thailand",
          correct: false,
        },
      ],
    },
    {
      id: 12,
      price: 1250000,
      question: "What is the tallest mountain in the world?",
      answers: [
        {
          text: "Mount Kilimanjaro",
          correct: false,
        },
        {
          text: "Mount Everest",
          correct: true,
        },
        {
          text: "Mount McKinley",
          correct: false,
        },
        {
          text: "Mount Fuji",
          correct: false,
        },
      ],
    },
    {
      id: 13,
      price: 2500000,
      question: "What is the official language of Brazil?",
      answers: [
        {
          text: "Spanish",
          correct: false,
        },
        {
          text: "Portuguese",
          correct: true,
        },
        {
          text: "French",
          correct: false,
        },
        {
          text: "English",
          correct: false,
        },
      ],
    },
    {
      id: 14,
      price: 5000000,
      question: "Which continent is the most populous?",
      answers: [
        {
          text: "Asia",
          correct: true,
        },
        {
          text: "Africa",
          correct: false,
        },
        {
          text: "Europe",
          correct: false,
        },
        {
          text: "North America",
          correct: false,
        },
      ],
    },
    {
      id: 15,
      price: "1 Crore",
      question: "Who invented the telephone?",
      answers: [
        {
          text: "Thomas Edison",
          correct: false,
        },
        {
          text: "Alexander Graham Bell",
          correct: true,
        },
        {
          text: "Nikola Tesla",
          correct: false,
        },
        {
          text: "Isaac Newton",
          correct: false,
        },
      ],
    },
    {
      id: 16,
      price: "7 Crore",
      question: "What is the largest organ in the human body?",
      answers: [
        {
          text: "Heart",
          correct: false,
        },
        {
          text: "Liver",
          correct: false,
        },
        {
          text: "Brain",
          correct: false,
        },
        {
          text: "Skin",
          correct: true,
        },
      ],
    },
  ];

  return (
    <>
      <div className="app">
        <div className="main">
          <div className="bottom">
            <Trivia
              data={data}
              questionActive={questionActive}
              setQuestionActive={setQuestionActive}
            />
          </div>
        </div>
        <div className="pyramid">
          <ul className="money-list">
            {moneyPyramid.map((m) => {
              return (
                <li
                  className={
                    questionActive === m.id
                      ? "money-list-items active"
                      : "money-list-items"
                  }
                  key={m.id}
                >
                  <span className="money-list-number">{m.id}</span>
                  <span className="money-list-amount">{m.amount}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
