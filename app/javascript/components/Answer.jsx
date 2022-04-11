import React from "react"

const Answer = (props) => {
  const {answer} = props
  return (
    <div
      className="answer-main"
      onClick={() => props.onClick(answer)}
    >
      <input
        type="radio"
        name="answer"
        className="answer-input"
      />
      <label className="answer-label">
        {answer.attributes.content}
      </label>
    </div>
  );
}

export default Answer;
