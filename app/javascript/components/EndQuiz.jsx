import React, { useEffect } from "react"
import axios from "axios";

function EndQuiz(props) {
  const percentCorrect = (100 * props.numCorrect) / props.qCount;

  useEffect(async () => {
    await axios.patch(`https://marbleous-quiz.herokuapp.com/user_quizzes/${props.userQuizId}`, { "is_done": true, "result": props.numCorrect})
    .then(resp => console.log("user_quiz_response", resp))
    .catch(data => console.log('error', data))
  })
    let header;
    if (percentCorrect >= 60) {
        header = (
            <h1 className="endquiz-h1">
            Well done! You got
                <span className="endquiz-green"> {props.numCorrect} </span>
            out of {props.qCount}!
            </h1>
        );
    } else {
        header = (
            <h1 className="endquiz-h1">
            You got <span className="endquiz-red"> {props.numCorrect} </span>
            out of {props.qCount}! Better luck next time!
            </h1>
        );
    }

    return (
        <div className="endquiz-return">
            {header}
        </div>
    );
}

export default EndQuiz;
