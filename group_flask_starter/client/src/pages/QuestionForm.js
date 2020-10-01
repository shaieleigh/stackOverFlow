import React from 'react'
import { Redirect } from 'react-router-dom';
import NavBar from '../components/NavBar';
import './QuestionForm.css'

function QuestionForm1() {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [tags, setTags] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        await fetch('/api/questions/ask', {
            method: 'post',
            headers: {
                "Content-Type": "application/json",
                "XSRF-TOKEN": Cookies.get("XSRF-TOKEN")
            },
            body: JSON.stringify({ title, body })
        });
        <Redirect to='/questions' />
    }

    return (
        <>
            <NavBar />
            <div id='form-container'>
                <form id='question-form'>
                    <label className='title-divs'>Title</label>
                    <input className='input-question-form' placeholder='e.g. Is there an R function for finding the index of an element in a vector?' onChange={e => setTitle(e.target.value)} />
                    <label className='title-divs'>Body</label>
                    <textarea className='input-question-form' rows='12' onChange={e => setBody(e.target.value)} />
                    <label className='title-divs'>Tags</label>
                    <input className='input-question-form' placeholder='e.g. (python javascript)' onChange={e => setTags(e.target.value)} />
                </form>
                <button type='submit' className='question-form-button' onClick={handleSubmit}>Ask this question</button>
            </div>
        </>
    )
}

export default QuestionForm1