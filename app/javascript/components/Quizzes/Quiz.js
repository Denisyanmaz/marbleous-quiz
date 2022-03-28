import React from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Link } from 'react-router-dom'

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
        <Link to={`/quizzes/${quiz.id}`}>Let's GO!</Link>
      </LinkWrapper>
    </div>
  )
}

export default Quiz
