import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from "../pages/Home";
import Quiz from "../pages/Quiz";

const App = () => {
  let currentUser = document.querySelector(".current_user")
  let activeUser = {}
  if (currentUser) {
    activeUser = JSON.parse(currentUser.dataset.user)
    //get all user quizzes
    //filter by user id
    // prop olarak quize yolla
  }



  console.log("user", activeUser)
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/quizzes/:id" element={<Quiz />} />
    </Routes>
  )
}

export default App
