import React, { useEffect } from "react"
import { Link } from "react-router-dom"

const SubjectCard = (props) => {
  const { title, imagePath, id, userQuiz} = props
  if (userQuiz) {
}
  useEffect(() => {
    let currentUser = document.querySelector(".current_user")
    if (!currentUser) {
      const links = document.querySelectorAll(".link")
      links.forEach((link_item)=>{
        link_item.classList.add("disable-link")
      })
    }
  }, [])

    return (
      <Link to={`/quizzes/${id}`} className="link"><div
        className="subcard-link"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url(${imagePath})`,
          backgroundSize: "cover",
          width: "480px"
        }}>
        <h2 className="subcard-h2">
          {title}
        </h2>
        {userQuiz ? <p className="subcard-p"> {(userQuiz.attributes.is_done === true) ? `Your Score: ${userQuiz.attributes.result}/${userQuiz.relationships.user_choices.data.length}` : "Continue Quiz" }</p> : <p></p>}
      </div></Link>
    );
}

export default SubjectCard;
