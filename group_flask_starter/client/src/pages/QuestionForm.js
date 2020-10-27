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
    const history = useHistory()
    const taglist = [];
    const auth = useSelector(state => state.auth)
    const handleSubmit = async (e) => {
        console.log(taglist)
        e.preventDefault();
        const userId = auth.user.id
        await fetch('/api/questions/ask', {
            method: 'post',
            headers: {
                "Content-Type": "application/json",
                "XSRF-TOKEN": Cookies.get("XSRF-TOKEN")
            },
            body: JSON.stringify({ title, userId, body, taglist })
        });
        history.push('/questions');
    }
    if (!auth.user) return <Redirect to="/login" />;

    const handleKeyUp = (e) => {
        if(e.keyCode == 32 || e.keyCode == 13){
            const i = document.getElementById("taginput").value
            taglist.push(i)
            document.getElementById("taginput").value = ''
            const tagspan = document.createElement("span")
            tagspan.innerHTML = i
            console.log(e.target.value)
            tagspan.classList.add("tags2")
            tagspan.setAttribute("id", ("tag" + taglist.length))
            tagspan.addEventListener("click", (e) => {
                const index = taglist.indexOf(e.target.innerHTML)
                taglist.splice(index, 1)
                document.getElementById(e.target.id).remove()
            })
            document.getElementById("taglist").appendChild(tagspan)
        }



    }

    const tagRender = () => {
        const list1 = []
        if (taglist.length > 0) {
            for (let i=0; i<taglist.length; i++) {
            list1.push(

                )
            }
        }
        return list1;
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
                    <input id ="taginput" className='input-question-form' placeholder='e.g. (python, javascript)' onKeyUp={handleKeyUp} />
                    <div id="taglist" className="taglist">
                    </div>
                </form>
                <button type='submit' className='question-form-button' onClick={handleSubmit}>Ask this question</button>
            </div>
        </>
    )
}

export default QuestionForm
