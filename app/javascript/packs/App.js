import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Quizzes from '../components/Quizzes/Quizzes'
import Quiz from '../components/Quiz/Quiz'

const App = () => {
  let currentUser = JSON.parse(document.querySelector(".current_user").dataset.user)

  console.log("user", currentUser)
  return (
    <Routes>
      <Route exact path="/" element={<Quizzes />} />
      <Route exact path="/quizzes/:id" element={<Quiz />} />
    </Routes>
  )
}

export default App
