import React, { useEffect } from "react"
import { Link } from "react-router-dom"

const SubjectCard = (props) => {
  const {title, image_path, id} = props

  useEffect(() => {
    console.log("test12")
    let currentUser = document.querySelector(".current_user")
    if (!currentUser) {
      const links = document.querySelectorAll(".link")
      links.forEach((link_item)=>{
        link_item.classList.add("disable-link")
      })
    }
  }, [])
  console.log("test2")
    return (
      <Link to={`/quizzes/${id}`} className="link"><div
        className="subcard-link"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)), url(${image_path})`,
          backgroundSize: "cover",
          width: "480px"
        }}>
        <h2 className="subcard-h2">
          {title}
        </h2>
      </div></Link>
    );

  console.log("test2", currentUser)
  return (
    <div
      className="subcard-link"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)), url(${image_path})`,
        backgroundSize: "cover",
        width: "480px"
      }}>
      <h2 className="subcard-h2">
        {title}
      </h2>
    </div>
  )

}

export default SubjectCard;
