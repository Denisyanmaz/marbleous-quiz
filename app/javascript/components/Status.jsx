import React from "react"

function Status(props) {
    if (props.correct) {
        return (
            <h2 className= "correct">
                Correct!
            </h2>
        );
    }

    return (
        <h2 className= "wrong">
            Wrong!
        </h2>
    );
}

export default Status;
