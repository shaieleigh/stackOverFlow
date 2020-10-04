import React, { useState } from "react";
import { Redirect } from 'react-router-dom';
import Cookies from "js-cookie";
import NavBar from '../components/NavBar';
import './QuestionForm.css'
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

function QuestionForm() {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [tags, setTags] = useState('');
    const history = useHistory();
    const userId = useSelector(state => state.auth.user.id);
    const handleSubmit = async (e) => {
        e.preventDefault();
        await fetch('/api/questions/ask', {
            method: 'post',
            headers: {
                "Content-Type": "application/json",
                "XSRF-TOKEN": Cookies.get("XSRF-TOKEN")
            },
            body: JSON.stringify({ title, userId, body })
        });
        history.push('/questions');
    }

    return (
        <>
            <NavBar />
            <div id='form-container'>
                <form id='question-form'>
                    <label className='title-divs'>Title</label>
                    <input className='input-question-form' placeholder='e.g. Is there a prize at the bottom of a Cracker Jack box?' onChange={e => setTitle(e.target.value)} />
                    <label className='title-divs'>Body</label>
                    <textarea className='input-question-form' rows='12' onChange={e => setBody(e.target.value)} />
                    <label className='title-divs'>Tags</label>
                    <input key={tags} className='input-question-form' placeholder='e.g. (python javascript)' onChange={e => setTags(e.target.value)} />
                </form>
                <button type='submit' className='question-form-button' onClick={handleSubmit}>Ask this question</button>
            </div>
        </>
    )
}

export default QuestionForm
