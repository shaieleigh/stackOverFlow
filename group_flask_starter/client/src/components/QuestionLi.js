import React from 'react';
import { useSelector } from 'react-redux';
import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import './QuestionLi.css'



function QuestionLi({ question }) {
    return (
        <div className="paper">
            <span id="votecount">0
              <span className="countlabel">votes</span>
            </span>
            <span id="anscount">0
              <span className="countlabel">answers</span>
            </span>
            <span id="viewcount">0 views</span>
            <span id="answer"> This will be the answer...</span>
            <span id="qbody">
                {question.body}
            </span>
            <span id="qusername">
                {question.username}
            </span>
            <span id="space">
                <span className="tag">
                    python
                </span>
            </span>
        </div>
    )
}

export default QuestionLi;
