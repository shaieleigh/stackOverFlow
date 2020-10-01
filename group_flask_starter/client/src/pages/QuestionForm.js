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
                        <input className='input-question-form' />
                        <label className='title-divs'>Body</label>
                        <textarea className='input-question-form' rows='8' />
                        <label className='title-divs'>Tags</label>
                        <input className='input-question-form' />
                    </form>
                </div>
            </>
        )
    }
}

export default QuestionForm

