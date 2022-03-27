import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Quizzes from './Quizzes/Quizzes'
import Quiz from './Quiz/Quiz'

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Quizzes />} />
      <Route exact path="/quizzes/:id" element={<Quiz />} />
    </Routes>
  )
}

export default App
