import React, { useEffect} from 'react';
import { fetchQuestions } from '../store/question';
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import QuestionLi from '../components/QuestionLi';
import NavBar from '../components/NavBar';


export default function Questions() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchQuestions());
      }, [dispatch]);
      const questions = useSelector(state => state.questionReducer);

    return (
        <>
        <NavBar/>
        <div className="questioncolumn">
            <ul id ="questionlist">
            {Object.values(questions).map(question =>(
                <QuestionLi key={question.id} question={question}/>
            ))}
            </ul>
        </div>
        </>
    )
}
