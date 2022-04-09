import React from "react";
import Answer from "./Answer"

const AnswerCard = (props) => {
  const { option } = props
  return (
      <div className="answercard-main">
          <div className="answercard-sub">
          {
              option.map((answer, index) => (
                  <Answer
                    key={index}
                    answer={answer}
                    onClick={props.onClick}
                  />
              ))
          }
          </div>
      </div>
  );
}

export default AnswerCard;
