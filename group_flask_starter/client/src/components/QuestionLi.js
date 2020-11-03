import React from 'react';
import { NavLink } from 'react-router-dom'
// import { useSelector } from 'react-redux';
// import { Paper } from "@material-ui/core";
// import { makeStyles } from "@material-ui/core/styles";

import './QuestionLi.css'



function QuestionLi({ question }) {
    const colorlist = ["orange", "blue", "green", "pink", "purple", "violet", "turquoise", "teal", "red"]
    const rand = Math.floor(Math.random() * 9)

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
            <span id="votecount">{question.voteCount ? question.voteCount : 0}
              <span className="countlabel">votes</span>
            </span>
            <span id="anscount">{question.answerCount ? question.answerCount : 0}
              <span className="countlabel">answers</span>
            </span>
            <span id="viewcount">{Math.floor(Math.random() * 20)} views</span>
            <span id="answer"> {question.body} </span>
            <span id="qbody">

                <NavLink className="qlink" to={`/questions/q/${question.id}`} id="linkz">{question.title}</NavLink>
            </span>
            <span id="qusername">
                <span id="accounticon" style={{backgroundColor: colorlist[rand]}} ><span>{question.username ? question.username[0] : "U"}</span></span>
                {question.username}
            </span>
            <span id="space">
                {tagRender()}
            </span>
        </div>
    )
}

export default QuestionLi;
