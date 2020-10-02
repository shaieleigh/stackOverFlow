import React from 'react';

import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import './QuestionDisplay.css'

function QuestionDisplay({ question }) {
    return (
        <div className="qbox">
            <span id="votes">
              <ArrowDropUpIcon id="arrow"/>
              <span className="counts">0</span>
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
                <span className="tags">
                    python
                </span>
            </span>
        </div>
    )
}


export default QuestionDisplay;
