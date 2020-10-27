import React from 'react';
import Cookies from "js-cookie";
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { fetchQuestion } from '../store/question'
import { useDispatch } from "react-redux";
import './QuestionDisplay.css'

function QuestionDisplay({ question }) {
    const dispatch = useDispatch();
    const upcount = async () => {
        const questionId = question.id
        const vote = 1
        await fetch(`/api/questions/${questionId}/voteCount`, {
            method: 'put',
            headers: {
                "Content-Type": "application/json",
                "XSRF-TOKEN": Cookies.get("XSRF-TOKEN")
            },
            body: JSON.stringify({ vote })
        });
        dispatch(fetchQuestion(questionId))
    }
    const downcount = async () => {
        const questionId = question.id
        const vote = -1
        await fetch(`/api/questions/${questionId}/voteCount`, {
            method: 'put',
            headers: {
                "Content-Type": "application/json",
                "XSRF-TOKEN": Cookies.get("XSRF-TOKEN")
            },
            body: JSON.stringify({ vote })
        });
        dispatch(fetchQuestion(questionId))
    }

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
              <ArrowDropUpIcon onClick={upcount} id="arrow"/>
              <span className="counts">{question.voteCount ? question.voteCount : 0}</span>
              <ArrowDropDownIcon onClick={downcount}  id="arrow"/>
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
