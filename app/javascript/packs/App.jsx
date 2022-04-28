import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from "../pages/Home";
import Quiz from "../pages/Quiz";
import axios from 'axios';

const App = () => {
  const [userQuizzes, setUserQuizzes] = useState([]);
  let currentUser = document.querySelector(".current_user")
  let activeUser = {}
  if (currentUser) {
    activeUser = JSON.parse(currentUser.dataset.user)
    useEffect(async () => {
      await axios.get("https://marbleous-quiz.herokuapp.com/user_quizzes")
        .then(resp => {
          setUserQuizzes(resp.data.data.filter(x => x.attributes.user_id === activeUser.id))
        })
        .catch(data => console.log('error', data))
    }, [])
    //get all user quizzes
    //filter by user id
    // prop olarak quize yolla
  }

  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/quizzes/:id" element={<Quiz
       userQuizzes = {userQuizzes}
       activeUser = {activeUser}
       />} />
    </Routes>
  )
}

export default App
