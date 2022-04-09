import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

import Header from "../components/Header";
import AnswerCard from "../components/AnswerCard";
import Status from "../components/Status";
import EndQuiz from "../components/EndQuiz";
import axios from "axios"


const Quiz = () => {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [numCorrect, setNumCorrect] = useState(0);
  const [statusShown, setStatusShown] = useState(false);
  const [currentQuestionCorrect, setCurrentQuestionCorrect] = useState(false);
  const [questions, setQuestions] = useState(false);
  const [response, setResponse] = useState([])
  const { id } = useParams();

  useEffect(async () => {
    await axios.get("http://localhost:3000/questions")
      .then(resp => {
        setResponse(resp.data)
        setQuestions(resp.data.data.filter(x => x.attributes.quiz_id.toString() === id))
    })
      .catch(data => console.log('error', data))
  }, [])


   const handleClick = (answer) => {
    setStatusShown(true);
    const correctAnswer = questions[questionNumber].attributes.correct_answer;
    answer === correctAnswer ? setStatus("correct") : setStatus("wrong");
  }

  const setStatus =(status) => {
      if (status === "correct") {
        setNumCorrect( numCorrect + 1 );
        setCurrentQuestionCorrect(true);
      } else {
        setCurrentQuestionCorrect(false);
      }
    setTimeout(() => switchQuestion(), 750);
  }

  const switchQuestion = () => {
    setStatusShown(false);
    setQuestionNumber(questionNumber < questions.length - 1 ? questionNumber + 1 : false);
  }
  if (questions !== false) {
  if (questionNumber !== false) {
    console.log(response)
   let questionOptions = []
    for (let i = 0; i < questions.length; i++) {
      let opt = response.included.filter(x => x.attributes.question_id.toString() === questions[i].id)
      questionOptions.push(opt)
    }
    const question = questions[questionNumber];
    const option = questionOptions[questionNumber];
    console.log("zzz", option)
    return (
      <div>
        <Header>{question.attributes.text}</Header>
          <div className="quiz">
            <AnswerCard
              option={option}
              onClick={handleClick}
            />
          </div>

        {statusShown && (
            <Status correct={currentQuestionCorrect} />
        )}
      </div>
    );
  }
  return <EndQuiz numCorrect={numCorrect} qCount = {questions.length} />;}
  return <div></div>
}

export default Quiz;
