import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const QuizName = styled.div`
  padding: 20px 0 10px 0;
  color: white;
  font-size: 32px;
`

const QuizDesc = styled.div`
  padding: 20px 0 10px 0;
  color: white;
  font-size: 18px;
`

const LinkWrapper = styled.div`
  margin: 20px 0 10px 0;

  a {
    color: #fff;
    background-color: #71b406;
    border-radius: 4px;
    padding: 10px 50px;
    cursor: pointer;
    border-radius: 3px;
    border: 1px solid #71b406;
    text-align: center;
    line-height: 20px;
    min-height: 40px;
    margin: 7px;
    font-weight: 600;
    text-decoration: none;
    width: 100%;
    transition: ease-in-out 0.1s;

    &:hover{
      border-color: #619a07;
      background: #619a07;
    }
  }
`

const Quiz = ({ quiz, ...props }) => {
  const [user_quiz, setUserQuiz] = useState({});
  let navigate = useNavigate();
  const handleClick = async (e) => {
    e.preventDefault()
    const user_id = 1
    const quiz_id = parseInt(quiz.id)
    await axios.post('/user_quizzes', { ...user_quiz, quiz_id, user_id})
      .then((resp) => {
        setUserQuiz()
        let path = `/quizzes/${quiz_id}`;
        navigate(path, { state: { id: quiz_id}});
      })
      .catch(resp => {
        let error
        switch (resp.message) {
          case "Request failed with status code 401":
            error = 'Please log in to leave a review.'
            break
          default:
            error = 'Something went wrong.'
        }
        setError(error)
      })
  }
  return (
    <div style={{
      backgroundImage: `linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)), url(${quiz.attributes.image_path})`,
        backgroundSize: "cover",
        height: "200px"
      }}>
      <QuizName>
        {quiz.attributes.title}
      </QuizName>
      <QuizDesc>
        {quiz.attributes.description}
      </QuizDesc>
      <LinkWrapper>
        <button onClick={handleClick}>Let's GO!</button>
      </LinkWrapper>
    </div>
  )
}

export default Quiz
