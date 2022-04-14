import React, {useEffect, useState} from "react"
import SubjectCard from "../components/SubjectCard";
import Header from "../components/Header";
import axios from "axios"

const Home = () => {
  const [quizzes, setQuizzes] = useState([])
  const [userQuizzes, setUserQuizzes] = useState([])
  let currentUser = document.querySelector(".current_user")
  let activeUser = {}
  if (currentUser) {
    activeUser = JSON.parse(currentUser.dataset.user)
  }

  useEffect(async() => {
    await axios.get("http://localhost:3000/quizzes")
      .then(resp => {
        setUserQuizzes(resp.data.included.filter(x => x.attributes.user_id === activeUser.id))
        setQuizzes(resp.data.data)})
      .catch(data => console.log('error', data))
  }, [])

  const grid = quizzes.map((quiz, index) => {
    let userQuizReverse = userQuizzes.slice().reverse()
    let userQuizFilter = userQuizReverse.find(x => x.attributes.quiz_id.toString() === quiz.id)
    return (
      <SubjectCard
        imagePath={quiz.attributes.image_path}
        title={quiz.attributes.title}
        key={index}
        id={quiz.id}
        userQuiz={userQuizFilter}
        />
    )
  })
    return (
        <div>
          {currentUser ? <Header>Choose a movie to get started:</Header> : <Header>Please Login or Signup to Start Your Adventure</Header>}
            <div className="home">
              {grid}
            </div>
        </div>
    );
}

export default Home;
