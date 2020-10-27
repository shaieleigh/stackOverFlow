import React from 'react';
import Cookies from "js-cookie";
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { fetchAnswers } from '../store/answer'
import { useDispatch } from "react-redux";
import './AnswerDisplay.css'

function AnswerDisplay({ answer }) {
    const dispatch = useDispatch();
    const upcount = async () => {
        const answerId = answer.id
        const questionId = answer.questionId
        const vote = 1
        await fetch(`/api/answers/${answerId}/voteCount`, {
            method: 'put',
            headers: {
                "Content-Type": "application/json",
                "XSRF-TOKEN": Cookies.get("XSRF-TOKEN")
            },
            body: JSON.stringify({ vote })
        });
        dispatch(fetchAnswers(questionId))
    }
    const downcount = async () => {
        const answerId = answer.id
        const questionId = answer.questionId
        const vote = -1
        await fetch(`/api/answers/${answerId}/voteCount`, {
            method: 'put',
            headers: {
                "Content-Type": "application/json",
                "XSRF-TOKEN": Cookies.get("XSRF-TOKEN")
            },
            body: JSON.stringify({ vote })
        });
        dispatch(fetchAnswers(questionId))
    }
    return (
        <div className="abox">
            <span id="votes2">
              <ArrowDropUpIcon onClick={upcount} id="arrow2"/>
              <span className="counts2">{answer.voteCount}</span>
              <ArrowDropDownIcon onClick={downcount} id="arrow2"/>
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
