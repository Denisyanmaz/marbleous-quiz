import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom"

import Header from "../components/Header";
import AnswerCard from "../components/AnswerCard";
import Status from "../components/Status";
import EndQuiz from "../components/EndQuiz";
import axios from "axios"


const Quiz = (props) => {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [numCorrect, setNumCorrect] = useState(0);
  const [statusShown, setStatusShown] = useState(false);
  const [currentQuestionCorrect, setCurrentQuestionCorrect] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [response, setResponse] = useState([])
  const [userQuiz, setUserQuiz] = useState({})
  const { id } = useParams();
  const { userQuizzes, activeUser } = props
  let quizIncomplete = userQuizzes.filter(x => x.attributes.quiz_id.toString() === id).find(x => x.attributes.is_done === null)


  useEffect(async () => {
    await axios.get("https://marbleous-quiz.herokuapp.com/questions")
      .then(resp => {
        setResponse(resp.data)
        setQuestions(resp.data.data.filter(x => x.attributes.quiz_id.toString() === id))
      })
      .catch(data => console.log('error', data))
    if (quizIncomplete) {
      setUserQuiz(quizIncomplete);
      await axios.get("https://marbleous-quiz.herokuapp.com/user_choices")
        .then(resp => {
          const userChoices = resp.data.data.filter(x => x.attributes.user_quiz_id.toString() === quizIncomplete.id)
          continueQuiz(userChoices)
        })
        .catch(data => console.log('error', data))
  } else {
      await axios.post("https://marbleous-quiz.herokuapp.com/user_quizzes", { "user_id": activeUser.id, "quiz_id": id })
      .then(resp => setUserQuiz(resp.data.data))
      .catch(data => console.log('error', data))
  }}, [])
  const continueQuiz = (userChoices) => {
    userChoices.forEach((userChoice) => {
      if (userChoice.attributes.is_correct) {
        setNumCorrect(numCorrect + 1)
      }
    });
    setQuestionNumber(userChoices.length);
  }

  // user quizleri quiz_id ile filtrele ve içinde is_done: false olanı bul
  // is_done false olan yoksa ya da quiz yoksa post request user_quiz
  //varsa continueQuiz(user_quiz_id) çalışacak



  // if user_quiz // eğer user quiz varsa ve is_done değilse çalışacak
  //continueQuiz()


  const handleClick = async (answer) => {
    setStatusShown(true);
    const correctAnswer = questions[questionNumber].attributes.correct_answer;
    let isCorrect = (answer.attributes.content === correctAnswer)
    isCorrect ? setStatus("correct") : setStatus("wrong");
    await axios.post("https://marbleous-quiz.herokuapp.com/user_choices", { "option_id": answer.id, "user_quiz_id": userQuiz.id, "is_correct": isCorrect })
      .then(resp => console.log("user_choice_response", resp))
      .catch(data => console.log('error', data))
  }

  const setStatus =(status) => {
      if (status === "correct") {
        setNumCorrect(numCorrect + 1);
        setCurrentQuestionCorrect(true);
      } else {
        setCurrentQuestionCorrect(false);
      }
    setTimeout(() => switchQuestion(questions), 750);
  }

  const switchQuestion = (questions) => {
    setStatusShown(false);
    setQuestionNumber(questionNumber < questions.length - 1 ? questionNumber + 1 : false);
  }
  if (questions.length) {
    if (questionNumber !== false) {
      let questionOptions = []
      for (let i = 0; i < questions.length; i++) {
        let opt = response.included.filter(x => x.attributes.question_id.toString() === questions[i].id)
        questionOptions.push(opt)
      }
      const question = questions[questionNumber];
      const option = questionOptions[questionNumber];
      return (
        <div>
          <Link to={`/`} className="home-button">Home</Link>
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
    return (
      <div>
        <Link to={`/`} className="home-button">Home</Link>
        <EndQuiz numCorrect={numCorrect} qCount = {questions.length} userQuizId = {userQuiz.id} />;
      </div>
    )}
  return <div></div>
}

export default Quiz;
