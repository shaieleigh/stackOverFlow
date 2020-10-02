import React, { useEffect} from 'react';
import { fetchQuestions } from '../store/question';
// import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import QuestionLi from '../components/QuestionLi';
import NavBar from '../components/NavBar';
import { Grid } from '@material-ui/core';
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import './Questions.css'

const theme = createMuiTheme({
    overrides: {
        MuiGrid: {
            container: {
                width: "60%"
            }
        }
    }
})





export default function Questions() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchQuestions());
      }, [dispatch]);
      const questions = useSelector(state => state.questionReducer);
      let count = 0;
      const countfunc = () => {
          Object.values(questions).forEach(question => {
            count ++
          })
          return count;
        }

    return (
        <>
        <NavBar/>
        <div className="questioncolumn">
            <ThemeProvider theme={theme}>
            <Grid container align="center" direction="column" spacing={0} alignItems="stretch" className="qgrid">
                <Grid item className="header">
                    <div id="headergroup">
                      <span id="headertext"> All Questions
                        <span id="qcount">{countfunc() + " questions"}</span>

                      </span>

                    </div>

                </Grid>
                {Object.values(questions).map(question =>(
                    <Grid key={question.id} item className="qitem">
                        <QuestionLi key={question.id} question={question}/>
                    </Grid>
                ))}
            </Grid>
            </ThemeProvider>
        </div>
        </>
    )
}
