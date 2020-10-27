import React, { useEffect} from 'react';
import { fetchQuestion } from '../store/question';
import { fetchAnswers } from '../store/answer';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import QuestionDisplay from '../components/QuestionDisplay';
import AnswerDisplay from '../components/AnswerDisplay';
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Oreo from '../components/Oreo';
import './QuestionId.css'
import { Button } from '@material-ui/core';
import NavBar from '../components/NavBar';
import PublicIcon from '@material-ui/icons/Public';
import { NavLink } from 'react-router-dom'


const colors = {
    text: 'white',
    background: '#0095FF',
}

const useStyles = makeStyles({
    root: {
      color: colors.text,
      width: "10%",
      height: "50%",
      backgroundColor: colors.background,
      "&:hover": {
        backgroundColor: colors.background
      }
    },
})

const theme = createMuiTheme({
    overrides: {
        MuiGrid: {
            container: {
                width: "60%"
            }
        },
        MuiButton: {
            label: {
              textTransform: "none",
              font: "13px Roboto",
              padding: "5px"
         },

        }


    }
})

export default function QuestionId() {
    const classes = useStyles()
    let { id } = useParams();
    console.log(id)
    const dispatch = useDispatch();
    useEffect(() => {
        debugger
        dispatch(fetchQuestion(id));
      }, [dispatch, id]);
      useEffect(() => {
        debugger
        dispatch(fetchAnswers(id));
      }, [dispatch, id]);
    const question = useSelector(state => state.questionReducer);
    const answers = useSelector(state => state.answer);

    const answerrender = () => {
        if (answers) {
            const list1 = []
            for (let i = 0; i < answers.length; i++) {
                list1.push(
                <Grid key={answers[i].id} item className="qitem1">
                    <AnswerDisplay key={answers[i].id} answer={answers[i]}/>
                </Grid>
                )
            }
            return list1;
        } else {
            return

        }

    }

    let count = 0;
    const countfunc = () => {
        if (answers) {
          Object.values(answers).forEach(answer => {
            count ++
          })
          return count;
        }
        return
    }

    console.log(question)
      return (
        <>
            <NavBar/>
            <div className="questioncolumn1">
            <ThemeProvider theme={theme}>
            <Grid container align="center" direction="column" spacing={0} alignItems="stretch" className="qgrid1">
                <Grid item className="header1">
                    <div id="headergroup1">
                    <span id="headertext1">{question.title}

                    </span>
                    <Button classes={classes}><NavLink id="linkz2" to="/questions/ask">Ask Question</NavLink></Button>


                    </div>

                </Grid>
                <Grid item className="qitem2">
                    <Oreo id="oreoadd"/>
                    <span id="report">Report this add</span>
                </Grid>
                <Grid key={question.id} item className="qitem1">
                    <QuestionDisplay key={question.id} question={question}/>
                </Grid>
                <Grid key={66} item className="aitem1">
                    <span id="acount">{countfunc() + " answers"}</span>
                </Grid>
                {answerrender()}
                </Grid>
                </ThemeProvider>

            </div>
            <div id="nav">
                <span id="pub">
                    PUBLIC
                </span>
                <span id="stack">
                    <PublicIcon/>
                    <span>
                        Snack Overflow
                    </span>
                </span>
            </div>

          </>
      )


}
