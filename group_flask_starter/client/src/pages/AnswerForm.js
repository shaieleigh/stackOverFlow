import React, { useState } from "react";
import { Redirect } from 'react-router-dom';
import Cookies from "js-cookie";
import NavBar from '../components/NavBar';
import './QuestionForm.css'
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAnswers } from '../store/answer'

function AnswerForm(questionId1) {
    const dispatch = useDispatch();
    const [body, setBody] = useState('');
    const auth = useSelector(state => state.auth)
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!auth.user) return <Redirect to="/login" />;
        const userId = auth.user.id
        const username = auth.user.username
        const questionId = questionId1.questionId
        const voteCount = 0
        const res = await fetch(`/api/answers/${questionId}`, {
            method: 'post',
            headers: {
                "Content-Type": "application/json",
                "XSRF-TOKEN": Cookies.get("XSRF-TOKEN")
            },
            body: JSON.stringify({ userId, questionId, body, voteCount, username })
        });
        const data = await res.json();
        const { message } = data;
        const errorsList = document.getElementById("answer-errors");
        errorsList.innerHTML = '';
        if (message) {
            errorsList.style.display = "flex";
            const errorLi = document.createElement('li');
            errorLi.innerHTML = message;
            errorsList.appendChild(errorLi)
        } else {
            errorsList.style.display = "none";
            const vote = 1
            await fetch(`/api/questions/${questionId}/answerCount`, {
                    method: 'put',
                    headers: {
                        "Content-Type": "application/json",
                        "XSRF-TOKEN": Cookies.get("XSRF-TOKEN")
                    },
                    body: JSON.stringify({ vote })
            });
            setBody("")
            document.getElementById("getme").value = ""
            dispatch(fetchAnswers(questionId))
        }

    }


    return (
        <>
                <div className="errors-container">
                    <ul className="errors" id="answer-errors"></ul>
                 </div>
                <form id='answer-form'>
                    <textarea id="getme" rows='12' onChange={e => setBody(e.target.value)} />
                </form>
                <div id="buttondiv">
                <button type='submit' className='answer-form-button' onClick={handleSubmit}>Post your answer</button>
                </div>
        </>
    )
}

export default AnswerForm
