import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Quiz from './Quiz'
import Header from './Header'
import styled from 'styled-components'

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

const Quizzes = () => {
  const [quizzes, setQuizzes] = useState([]);
  useEffect(() => {
    axios.get('/quizzes')
      .then(resp => setQuizzes(resp.data.data))
      .catch(data => console.log('error', data))
  }, [])

  const grid = quizzes.map((quiz, index) => {
    const { title, description, image_path } = quiz.attributes
    return (
      <Quiz
        key = {index}
        quiz = {quiz}
      />
    )
  })

  return (
    <Home>
      <Header />
      <Grid>{grid}</Grid>
    </Home>
  )
}

export default Quizzes
