import React, { useEffect} from 'react';
import { fetchQuestions } from '../store/question';
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import QuestionLi from '../components/QuestionLi';
import NavBar from '../components/NavBar';
import { Grid } from '@material-ui/core';

import { makeStyles } from "@material-ui/core/styles";

import './Questions.css'


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
            <Grid container align="center" direction="column" spacing={0} alignItems="stretch" className="qgrid">
                <Grid item className="header">
                    <span id="headertext"> All Questions</span>
                </Grid>
                {Object.values(questions).map(question =>(
                    <Grid key={question.id} item className="qitem">
                        <QuestionLi key={question.id} question={question}/>
                    </Grid>
                ))}
            </Grid>
        </div>
        </>
    )
}
