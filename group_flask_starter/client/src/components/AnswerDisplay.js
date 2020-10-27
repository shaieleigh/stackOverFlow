import React from 'react';

import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import './AnswerDisplay.css'

function AnswerDisplay({ answer }) {
    return (
        <div className="abox">
            <span id="votes2">
              <ArrowDropUpIcon id="arrow2"/>
              <span className="counts2">{answer.voteCount}</span>
              <ArrowDropDownIcon id="arrow2"/>
            </span>
            <span id="body2">
                {answer.body}
            </span>
            <span id="user2">
                <AccountCircleIcon/>
                {answer.username}
            </span>
        </div>
    )
}


export default AnswerDisplay;
