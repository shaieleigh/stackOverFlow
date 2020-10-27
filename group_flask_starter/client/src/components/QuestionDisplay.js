import React from 'react';

import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import './QuestionDisplay.css'

function QuestionDisplay({ question }) {

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
        <div className="qbox">
            <span id="votes">
              <ArrowDropUpIcon id="arrow"/>
              <span className="counts">{question.voteCount}</span>
              <ArrowDropDownIcon id="arrow"/>
            </span>
            <span id="body">
                {question.body}
            </span>
            <span id="user">
                <AccountCircleIcon/>
                {question.username}
            </span>
            <span id="tagbox">
                {tagRender()}
            </span>
        </div>
    )
}


export default QuestionDisplay;
