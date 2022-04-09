import React, {useEffect, useState} from "react"
import SubjectCard from "../components/SubjectCard";
import Header from "../components/Header";
import axios from "axios"

const Home = () => {
  const [quizzes, setQuizzes] = useState([])
  let currentUser = document.querySelector(".current_user")


  useEffect(async() => {
    await axios.get("http://localhost:3000/quizzes")
      .then(resp => setQuizzes(resp.data.data))
      .catch(data => console.log('error', data))
  }, [])

  const grid = quizzes.map((quiz, index) => {
    return (
      <SubjectCard
        image_path={quiz.attributes.image_path}
        title={quiz.attributes.title}
        key={index}
        id={quiz.id}
        />
    )
  })
    return (
        <div>
          {currentUser ? <Header>Choose a category to get started:</Header> : <Header>Please Login or Signup to Start Your Adventure</Header>}
            <div className="home">
              {grid}
            </div>
        </div>
    );
}

export default Home;
