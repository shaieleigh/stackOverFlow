import React from 'react';
import { NavLink } from 'react-router-dom'
// import { useSelector } from 'react-redux';
// import { Paper } from "@material-ui/core";
// import { makeStyles } from "@material-ui/core/styles";

import './QuestionLi.css'



function QuestionLi({ question }) {
    const tagRender = () => {
        const list1 = []
        if (question.tags) {
            for (let i=0; i<question.tags.length; i++) {
                list1.push(
                <span className="tags">
                    {question.tags[i].name}
                </span>
                )
            }
        }
        return list1
    }
    return (
        <div className="paper">
            <span id="votecount">{question.voteCount}
              <span className="countlabel">votes</span>
            </span>
            <span id="anscount">{question.answerCount}
              <span className="countlabel">answers</span>
            </span>
            <span id="viewcount">{Math.floor(Math.random() * 20)} views</span>
            <span id="answer"> {question.body} </span>
            <span id="qbody">

                <NavLink to={`/questions/q/${question.id}`} id="linkz">{question.title}</NavLink>
            </span>
            <span id="qusername">
                {question.username}
            </span>
            <span id="space">
                {tagRender()}
            </span>
        </div>
    )
}

export default QuestionLi;
