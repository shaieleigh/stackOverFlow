import React from 'react';
import { NavLink } from 'react-router-dom'
// import { useSelector } from 'react-redux';
// import { Paper } from "@material-ui/core";
// import { makeStyles } from "@material-ui/core/styles";

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
            <span id="answer"> {question.body} </span>
            <span id="qbody">

                <NavLink to={`/questions/q/${question.id}`} id="linkz">{question.title}</NavLink>
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
