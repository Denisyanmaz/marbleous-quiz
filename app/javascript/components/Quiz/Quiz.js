import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Question from './Question'
import Header from './Header'
import styled from 'styled-components'
import { useLocation } from 'react-router-dom';

const Home = styled.div`
  text-align:center;
  margin-left: auto;
  margin-right: auto;
  max-width: 1200px;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  width: 100%;
  padding: 20px;
  > div {
    background-color: #fff;
    border-radius: 5px;
    padding: 20px;
  }
`

const Quiz = (props) => {
  const location = useLocation()
  const [questions, setQuestions] = useState([]);
  const [quiz, setQuiz] = useState([]);

  useEffect(() => {
    axios.get(`/quizzes/${location.state.id}`)
      .then(resp => {
        setQuiz(resp.data.data)
        setQuestions(resp.data.included)
      })
      .catch(data => console.log('error', data))
  }, [])

  const grid = questions.map((question, index) => {
    return (
      <Question
        key = {index}
        question = {question}
        quiz = {quiz}
      />
    )
  })

  return (
    <Home>
      <Header/>
      <Grid>{grid}</Grid>
    </Home>
  )
}

export default Quiz
