import React from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Link } from 'react-router-dom'

const Card = styled.div`
  border: 1px solid #efefef;
  background-image: url("assets/avengers");
`

const QuizName = styled.div`
  padding: 20px 0 10px 0;
  color: white;
`

const LinkWrapper = styled.div`
  margin: 30px 0 20px 0;
  height:50px;

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

const Quiz = ({ title, description, image_path, ...props }) => {
  return (
    <Card>
      <QuizName>
        {title}
      </QuizName>
      <LinkWrapper>
        <Link to={"/quizzes"}>Let's GO!</Link>
      </LinkWrapper>
    </Card>
  )
}

export default Quiz
