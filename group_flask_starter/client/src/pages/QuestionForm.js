import { Input } from '@material-ui/core';
import React, { Component } from 'react'
import NavBar from '../components/NavBar';
import './QuestionForm.css'

export class QuestionForm extends Component {
    render() {
        return (
            <>
                <NavBar />
                <div id='form-container'>
                    <form id='question-form'>
                        <label className='title-divs'>Title</label>
                        <input className='input-question-form' placeholder='e.g. Is there an R function for finding the index of an element in a vector?' />
                        <label className='title-divs'>Body</label>
                        <textarea className='input-question-form' rows='12' />
                        <label className='title-divs'>Tags</label>
                        <input className='input-question-form' placeholder='e.g. (python javascript)' />
                    </form>
                    <button type='submit' className='question-form-button'>Ask this question</button>
                </div>
            </>
        )
    }
}

export default QuestionForm

