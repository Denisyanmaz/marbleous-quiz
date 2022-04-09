import React from "react"

function EndQuiz(props) {
  const percentCorrect = (100 * props.numCorrect) / props.qCount;

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
