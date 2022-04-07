import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Option from './Option'

const QuestionName = styled.div`
  padding: 20px 0 10px 0;
  color: white;
  font-size: 32px;
`

const QuestionDesc = styled.div`
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

const OptionsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const Question = ({ question, quiz, ...props }) => {
  let options = question.relationships.options.data
  const grid = options.map((option, index) => {
    return (
        <Option
          key={index}
          option={option}
        />
    )
  })
  let navigate = useNavigate();
  const handleClick = async (e) => {
    e.preventDefault()
    const quiz_id = parseInt(quiz.id)
    await axios.post('/user_choices', { ...user_quiz_id, option_id })
      .then((resp) => {
        setUserQuiz()
        let path = `/quizzes/${quiz_id}`;
        navigate(path);
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
    <div>{grid}</div>
  )
}

export default Question
