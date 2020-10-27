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
        const questionId = questionId1.questionId
        const voteCount = 0
        await fetch(`/api/answers/${questionId}`, {
            method: 'post',
            headers: {
                "Content-Type": "application/json",
                "XSRF-TOKEN": Cookies.get("XSRF-TOKEN")
            },
            body: JSON.stringify({ userId, questionId, body, voteCount })
        });
        setBody("")
        document.getElementById("getme").value = ""
        dispatch(fetchAnswers(questionId))


    }


    return (
        <>

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
