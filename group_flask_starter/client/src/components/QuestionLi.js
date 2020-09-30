import React from 'react';
import { useSelector } from 'react-redux';




function QuestionLi({ question }) {
    return (
        <div>
            <span>
                {question.username}
            </span>
            <span>
                {question.body}
            </span>
        </div>
    )
}

export default QuestionLi;
